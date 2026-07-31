# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from database import init_db, get_db_connection, insert_ngo, get_pollution_hotspots
from alerts import send_sms_alert

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Requests for the React frontend

# Automatically initialize SQLite database tables on startup
init_db()

@app.route("/", methods=["GET"])
def health_check():
    return jsonify({
        "status": "online",
        "system": "CoastSentinel AI Backend API",
        "version": "1.0.0"
    }), 200

# 1. NGO Registration Endpoint (NGO Portal Tab)
@app.route("/api/v1/auth/register", methods=["POST"])
def register_user():
    data = request.get_json() or {}
    org_name = data.get("orgName")
    email = data.get("email")
    phone = data.get("phone")
    region = data.get("region")

    if not all([org_name, email, phone, region]):
        return jsonify({"error": "Missing required fields (orgName, email, phone, region)"}), 400

    result = insert_ngo(org_name, email, phone, region)
    
    if not result.get("success"):
        return jsonify({"error": result.get("error", "Registration failed")}), 400

    return jsonify({
        "message": "Registration successful and saved to database!", 
        "user": {
            "id": result["user_id"], 
            "orgName": org_name, 
            "email": email, 
            "region": region
        }
    }), 201

# 2. Live Pollution Data Endpoint (Dashboard Map View)
@app.route("/api/v1/pollution/live", methods=["GET"])
def get_live_pollution():
    try:
        rows = get_pollution_hotspots()
        features = []
        for row in rows:
            features.append({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [row["lng"], row["lat"]]
                },
                "properties": {
                    "id": row["id"],
                    "severity": row["severity"],
                    "confidence": row["confidence"],
                    "area": row["area_name"],
                    "timestamp": row["detected_at"]
                }
            })

        return jsonify({
            "type": "FeatureCollection",
            "features": features
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 3. Trigger Emergency SMS Alert Endpoint (Dashboard Button)
@app.route("/api/v1/alerts/trigger", methods=["POST"])
def trigger_alert():
    data = request.get_json() or {}
    hotspot_id = data.get("hotspotId", 1)
    
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Fetch hotspot details
        cur.execute("SELECT area_name, severity, lat, lng FROM pollution_hotspots WHERE id = ?", (hotspot_id,))
        hotspot = cur.fetchone()
        
        if not hotspot:
            conn.close()
            return jsonify({"error": "Hotspot not found"}), 404

        # Fetch registered NGOs to notify
        cur.execute("SELECT org_name, phone FROM ngos")
        ngos = cur.fetchall()
        conn.close()

        if not ngos:
            return jsonify({
                "message": f"Hotspot ID {hotspot_id} flagged, but no registered NGOs found in database."
            }), 200

        # Construct emergency text dispatch message
        alert_msg = (
            f"🚨 CoastSentinel Alert! Debris detected at "
            f"{hotspot['area_name']} (Severity: {hotspot['severity']}). "
            f"Coordinates: ({hotspot['lat']}, {hotspot['lng']}). Immediate dispatch requested."
        )

        dispatch_results = []
        for ngo in ngos:
            res = send_sms_alert(ngo["phone"], alert_msg)
            dispatch_results.append({
                "org": ngo["org_name"], 
                "phone": ngo["phone"], 
                "status": res["success"]
            })

        return jsonify({
            "message": f"SMS dispatch triggered for hotspot ID {hotspot_id}!",
            "dispatches": dispatch_results
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 4. Citizen Debris Report Endpoint (Citizen Report Tab)
@app.route("/api/v1/reports/citizen", methods=["POST"])
def submit_citizen_report():
    data = request.get_json() or {}
    location = data.get("location")
    description = data.get("description")
    
    if not location or not description:
        return jsonify({"error": "Missing location or description"}), 400
        
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO citizen_reports (location, description) VALUES (?, ?)",
            (location, description)
        )
        conn.commit()
        conn.close()
        
        return jsonify({"message": "Citizen debris report recorded successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)