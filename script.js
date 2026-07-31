// Coastal Master Database
const COASTAL_CITIES = [
  {
    id: 'vizag-rk-beach',
    name: 'Visakhapatnam',
    beach: 'RK Beach Sector',
    lat: 17.6868,
    lng: 83.2185,
    ceri: 74,
    ppds: 35,
    risk: 'High Risk',
    predictions: {
      shorelineRetreat: '3.42 m / yr',
      plasticForecast: '+14% density over 30 days',
      surgeRisk: 'High vulnerability during high tides'
    },
    precautions: [
      'Install geotextile sandbags along high-scour shorelines.',
      'Deploy floating debris barriers near coastal drain outlets.',
      'Restrict heavy machinery access on eroding embankment sectors.'
    ],
    heatPoints: [
      [17.6868, 83.2185, 0.85], [17.6912, 83.2240, 0.90], [17.6980, 83.2310, 0.80],
      [17.6790, 83.2100, 0.70], [17.7050, 83.2400, 0.75], [17.7120, 83.2500, 0.65]
    ]
  },
  {
    id: 'mumbai-marine-drive',
    name: 'Mumbai',
    beach: 'Marine Drive Sector',
    lat: 18.9438,
    lng: 72.8232,
    ceri: 82,
    ppds: 64,
    risk: 'Critical',
    predictions: {
      shorelineRetreat: '4.15 m / yr',
      plasticForecast: '+28% microplastic build-up',
      surgeRisk: 'Severe urban runoff & monsoon surge'
    },
    precautions: [
      'Initiate daily automated beach cleaning during low tide.',
      'Strengthen sea-wall Tetrapod barriers along promenades.',
      'Issue advisory for citizen cleanup crews near storm drains.'
    ],
    heatPoints: [
      [18.9438, 72.8232, 0.95], [18.9500, 72.8200, 1.00], [18.9350, 72.8260, 0.88],
      [18.9250, 72.8280, 0.82], [18.9600, 72.8150, 0.90], [18.9100, 72.8300, 0.75]
    ]
  },
  {
    id: 'chennai-marina',
    name: 'Chennai',
    beach: 'Marina Beach Sector',
    lat: 13.0499,
    lng: 80.2824,
    ceri: 68,
    ppds: 48,
    risk: 'Moderate',
    predictions: {
      shorelineRetreat: '2.80 m / yr',
      plasticForecast: '+10% weekend trash spike',
      surgeRisk: 'Moderate wave impact along southern spit'
    },
    precautions: [
      'Deploy extra waste collection bins at 100m intervals.',
      'Monitor sand dune movement using local drone telemetry.',
      'Restrict temporary commercial stalls close to water line.'
    ],
    heatPoints: [
      [13.0499, 80.2824, 0.70], [13.0600, 80.2850, 0.75], [13.0400, 80.2800, 0.65],
      [13.0300, 80.2780, 0.60], [13.0700, 80.2880, 0.80], [13.0200, 80.2750, 0.55]
    ]
  },
  {
    id: 'kochi-fort',
    name: 'Kochi',
    beach: 'Fort Kochi Beach',
    lat: 9.9658,
    lng: 76.2421,
    ceri: 58,
    ppds: 28,
    risk: 'Moderate',
    predictions: {
      shorelineRetreat: '1.95 m / yr',
      plasticForecast: '+5% riverine drift',
      surgeRisk: 'Low surge risk; estuary backwater overflow'
    },
    precautions: [
      'Clear organic drift and hyacinth mats near fishing nets.',
      'Maintain submerged stone groynes to limit beach scour.',
      'Conduct community microplastic sampling bi-weekly.'
    ],
    heatPoints: [
      [9.9658, 76.2421, 0.55], [9.9720, 76.2400, 0.60], [9.9580, 76.2450, 0.50],
      [9.9800, 76.2380, 0.62], [9.9500, 76.2480, 0.45]
    ]
  },
  {
    id: 'puri-beach',
    name: 'Puri',
    beach: 'Golden Beach Sector',
    lat: 19.7983,
    lng: 85.8249,
    ceri: 77,
    ppds: 41,
    risk: 'High Risk',
    predictions: {
      shorelineRetreat: '3.65 m / yr',
      plasticForecast: '+19% seasonal tourist drift',
      surgeRisk: 'High cyclonic wave surge probability'
    },
    precautions: [
      'Reinforce emergency warning sirens along public beach stretches.',
      'Position rapid-response cleanup teams post religious events.',
      'Construct bio-shield vegetation strips behind primary dunes.'
    ],
    heatPoints: [
      [19.7983, 85.8249, 0.82], [19.8050, 85.8350, 0.88], [19.7900, 85.8150, 0.78],
      [19.8120, 85.8450, 0.70], [19.7820, 85.8050, 0.65]
    ]
  },
  {
    id: 'kakinada-coast',
    name: 'Kakinada',
    beach: 'Kakinada Sea Beach',
    lat: 16.9891,
    lng: 82.2475,
    ceri: 85,
    ppds: 52,
    risk: 'Critical',
    predictions: {
      shorelineRetreat: '4.80 m / yr',
      plasticForecast: '+22% port canal outflow',
      surgeRisk: 'Critical coastal erosion near Hope Island gap'
    },
    precautions: [
      'Accelerate artificial reef nourishment along eroded gaps.',
      'Install oil & microplastic booms across harbor outlets.',
      'Enforce strict non-dumping zones for commercial vessels.'
    ],
    heatPoints: [
      [16.9891, 82.2475, 0.92], [16.9950, 82.2520, 0.98], [16.9800, 82.2420, 0.85],
      [17.0050, 82.2600, 0.88], [16.9700, 82.2380, 0.80]
    ]
  },
  {
    id: 'mangalore-panambur',
    name: 'Mangalore',
    beach: 'Panambur Beach',
    lat: 12.9559,
    lng: 74.8023,
    ceri: 51,
    ppds: 22,
    risk: 'Low Risk',
    predictions: {
      shorelineRetreat: '1.40 m / yr',
      plasticForecast: '+3% stable trend',
      surgeRisk: 'Low vulnerability; port breakwater protected'
    },
    precautions: [
      'Maintain routine weekend beach surveillance.',
      'Inspect river mouth sediment traps twice monthly.',
      'Sustain public awareness displays on marine litter.'
    ],
    heatPoints: [
      [12.9559, 74.8023, 0.45], [12.9620, 74.8010, 0.48], [12.9480, 74.8040, 0.40],
      [12.9700, 74.7990, 0.35]
    ]
  },
  {
    id: 'digha-beach',
    name: 'Digha',
    beach: 'Digha Sea Coast',
    lat: 21.6266,
    lng: 87.5074,
    ceri: 88,
    ppds: 59,
    risk: 'Critical',
    predictions: {
      shorelineRetreat: '5.10 m / yr',
      plasticForecast: '+31% estuarine accumulation',
      surgeRisk: 'Extreme tidal scour and embankment breach risk'
    },
    precautions: [
      'Deploy concrete block pitching along damaged embankment zones.',
      'Prohibit public access to collapsing coastal sea walls.',
      'Schedule immediate debris clearance following spring tides.'
    ],
    heatPoints: [
      [21.6266, 87.5074, 0.96], [21.6320, 87.5180, 1.00], [21.6200, 87.4980, 0.90],
      [21.6400, 87.5300, 0.85], [21.6100, 87.4880, 0.82]
    ]
  }
];

let mainMap = null;
let mainMarker = null;
let currentTileLayer = null;
let heatmapMap = null;
let selectedCity = COASTAL_CITIES[0];
let chartsInitialized = false;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCityList();
  initMainMap();
  selectCity(COASTAL_CITIES[0].id);
});

// Map Tile Loader supporting CartoDB and Google Satellite Layer Toggles
function getTileLayer(style) {
  if (style === 'google-satellite') {
    return L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps Satellite'
    });
  } else if (style === 'google-hybrid') {
    return L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps Hybrid'
    });
  } else {
    // Default CartoDB Dark
    return L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    });
  }
}

// Map Style Switcher
function toggleMapStyle(style) {
  if (!mainMap) return;
  if (currentTileLayer) mainMap.removeLayer(currentTileLayer);
  currentTileLayer = getTileLayer(style);
  currentTileLayer.addTo(mainMap);
}

// Render City Sidebar List
function renderCityList() {
  const container = document.getElementById('city-list');
  container.innerHTML = '';

  COASTAL_CITIES.forEach(city => {
    const isSelected = city.id === selectedCity.id;
    const card = document.createElement('div');
    card.onclick = () => selectCity(city.id);
    card.className = `p-3 rounded-xl border transition cursor-pointer ${
      isSelected 
        ? 'bg-[#122338] border-teal-500 shadow-md' 
        : 'bg-[#08111a] border-slate-800 hover:border-slate-700'
    }`;

    const riskColor = city.risk === 'Critical' ? 'text-rose-400' : city.risk === 'High Risk' ? 'text-amber-400' : 'text-teal-400';

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <h3 class="text-xs font-bold text-white">${city.name}</h3>
        <span class="text-[10px] ${riskColor} font-semibold">${city.risk}</span>
      </div>
      <p class="text-[11px] text-slate-400 mt-0.5">${city.beach}</p>
      <div class="flex items-center gap-3 mt-2 text-[10px] font-mono text-slate-400">
        <span>CERI: <strong class="text-slate-200">${city.ceri}</strong></span>
        <span>PPDS: <strong class="text-slate-200">${city.ppds}</strong></span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initialize Main Dashboard Map
function initMainMap() {
  mainMap = L.map('map').setView([selectedCity.lat, selectedCity.lng], 12);
  currentTileLayer = getTileLayer('carto');
  currentTileLayer.addTo(mainMap);
  mainMarker = L.marker([selectedCity.lat, selectedCity.lng]).addTo(mainMap);
}

// Sector Selector Function
function selectCity(cityId) {
  const city = COASTAL_CITIES.find(c => c.id === cityId);
  if (!city) return;

  selectedCity = city;

  if (mainMap && mainMarker) {
    mainMap.flyTo([city.lat, city.lng], 12, { duration: 0.8 });
    mainMarker.setLatLng([city.lat, city.lng]);
    mainMarker.bindPopup(`<b>${city.name}</b><br>${city.beach}<br>CERI: ${city.ceri} | PPDS: ${city.ppds}`).openPopup();
  }

  document.getElementById('sector-name').innerText = city.name;
  document.getElementById('beach-name').innerText = city.beach;
  document.getElementById('ceri-val').innerText = city.ceri;
  document.getElementById('ppds-val').innerText = city.ppds;
  document.getElementById('risk-badge').innerText = city.risk;

  document.getElementById('recession-rate').innerText = city.predictions.shorelineRetreat;
  document.getElementById('plastic-forecast').innerText = city.predictions.plasticForecast;
  document.getElementById('surge-risk').innerText = city.predictions.surgeRisk;

  const precautionsContainer = document.getElementById('precautions-list');
  precautionsContainer.innerHTML = '';
  city.precautions.forEach(p => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2 bg-[#08111a] p-2 rounded-lg border border-slate-800/80';
    li.innerHTML = `<span class="text-teal-400 font-bold">•</span><span>${p}</span>`;
    precautionsContainer.appendChild(li);
  });

  renderCityList();
}

// Tab Switching & Lazy Chart Initialization
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('text-teal-400', 'border-teal-400');
    btn.classList.add('text-slate-400', 'border-transparent');
  });

  document.getElementById(`tab-${tabId}`).classList.add('active');
  const activeBtn = document.getElementById(`nav-${tabId}`);
  activeBtn.classList.remove('text-slate-400', 'border-transparent');
  activeBtn.classList.add('text-teal-400', 'border-teal-400');

  if (tabId === 'dashboard' && mainMap) {
    setTimeout(() => mainMap.invalidateSize(), 100);
  } else if (tabId === 'analytics') {
    setTimeout(() => {
      initAnalyticsHeatmap();
      if (!chartsInitialized) {
        initCharts();
        chartsInitialized = true;
      }
    }, 100);
  }
}

// Analytics Heatmap
function initAnalyticsHeatmap() {
  if (heatmapMap) {
    heatmapMap.invalidateSize();
    return;
  }

  heatmapMap = L.map('analytics-heatmap').setView([16.8, 80.5], 5);
  getTileLayer('carto').addTo(heatmapMap);

  let allHeatPoints = [];
  COASTAL_CITIES.forEach(city => {
    allHeatPoints = allHeatPoints.concat(city.heatPoints);
  });

  L.heatLayer(allHeatPoints, {
    radius: 28,
    blur: 15,
    maxZoom: 8,
    minOpacity: 0.4,
    gradient: { 0.3: '#14b8a6', 0.6: '#f59e0b', 0.95: '#f43f5e' }
  }).addTo(heatmapMap);
}

// Render Live Analytical Charts using Chart.js
function initCharts() {
  const cityNames = COASTAL_CITIES.map(c => c.name);
  const ppdsValues = COASTAL_CITIES.map(c => c.ppds);

  // 1. Bar Chart: PPDS comparison
  const ctx1 = document.getElementById('ppdsBarChart').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: cityNames,
      datasets: [{
        label: 'Plastic Density (PPDS)',
        data: ppdsValues,
        backgroundColor: '#14b8a6',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { display: false } },
        y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } }
      }
    }
  });

  // 2. Line Chart: 12-Month Erosion Trajectory
  const ctx2 = document.getElementById('erosionLineChart').getContext('2d');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      datasets: [
        {
          label: 'Mumbai',
          data: [72, 75, 78, 82, 85, 89],
          borderColor: '#f43f5e',
          tension: 0.3,
          borderWidth: 2
        },
        {
          label: 'Visakhapatnam',
          data: [65, 68, 70, 74, 76, 79],
          borderColor: '#f59e0b',
          tension: 0.3,
          borderWidth: 2
        },
        {
          label: 'Mangalore',
          data: [45, 47, 48, 51, 52, 54],
          borderColor: '#14b8a6',
          tension: 0.3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#cbd5e1', font: { size: 10 } } } },
      scales: {
        x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { display: false } },
        y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } }
      }
    }
  });

  // 3. Doughnut Chart: Risk Level Breakdown
  const criticalCount = COASTAL_CITIES.filter(c => c.risk === 'Critical').length;
  const highCount = COASTAL_CITIES.filter(c => c.risk === 'High Risk').length;
  const moderateCount = COASTAL_CITIES.filter(c => c.risk === 'Moderate' || c.risk === 'Low Risk').length;

  const ctx3 = document.getElementById('riskDoughnutChart').getContext('2d');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Critical', 'High Risk', 'Moderate/Low'],
      datasets: [{
        data: [criticalCount, highCount, moderateCount],
        backgroundColor: ['#f43f5e', '#f59e0b', '#14b8a6'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: '#cbd5e1', font: { size: 10 } } } }
    }
  });
}

// Form & Alert Handlers
function triggerAlert() {
  const banner = document.getElementById('alert-banner');
  banner.innerText = `🚨 Emergency Alert Dispatched for ${selectedCity.name} (${selectedCity.beach})! Regional teams notified.`;
  banner.classList.remove('hidden');
}

function submitCitizenReport(e) {
  e.preventDefault();
  const banner = document.getElementById('citizen-banner');
  banner.innerText = '✅ Debris report submitted successfully! Thank you for contributing.';
  banner.classList.remove('hidden');
  e.target.reset();
}

function registerNGO(e) {
  e.preventDefault();
  const banner = document.getElementById('ngo-banner');
  banner.innerText = '✅ NGO successfully registered for automated coastal monitoring alerts.';
  banner.classList.remove('hidden');
  e.target.reset();
}