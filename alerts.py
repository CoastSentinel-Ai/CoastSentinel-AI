# backend/alerts.py
import os
from twilio.rest import Client

# Load Twilio credentials from environment variables (or set mock fallbacks for testing)
ACCOUNT_SID = os.environ.get("TWILIO_ACCOUNT_SID", "your_account_sid")
AUTH_TOKEN = os.environ.get("TWILIO_AUTH_TOKEN", "your_auth_token")
TWILIO_PHONE_NUMBER = os.environ.get("TWILIO_PHONE_NUMBER", "+15017122661")

def send_sms_alert(to_phone_number, message_body):
    """
    Sends an SMS alert using the Twilio REST API.
    """
    try:
        # If credentials are placeholders, simulate successful send for local testing
        if ACCOUNT_SID == "your_account_sid":
            print(f"[SIMULATION] Sending SMS to {to_phone_number}: {message_body}")
            return {"success": True, "sid": "simulated_sid_12345"}

        client = Client(ACCOUNT_SID, AUTH_TOKEN)
        message = client.messages.create(
            body=message_body,
            from_=TWILIO_PHONE_NUMBER,
            to=to_phone_number
        )
        return {"success": True, "sid": message.sid}
        
    except Exception as e:
        print(f"Failed to send SMS: {str(e)}")
        return {"success": False, "error": str(e)}