# 🚀 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit app that simulates real-time crypto price updates, inspired by CoinMarketCap.

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- JavaScript (ES6+)
- CSS3 (Responsive Design)
- Mock WebSocket (using setInterval)

---

## 🏗️ Architecture Overview

/src
  /app
    store.js            # Redux store setup
  /features
    /crypto
      cryptoSlice.js     # Redux slice for crypto data
      cryptoSelectors.js # Memoized selectors for optimization
  /components
    CryptoTable.jsx      # Main table displaying crypto data
    CryptoRow.jsx        # Single crypto row component
  /utils
    mockSocket.js        # Mock WebSocket simulation
    sampleData.js        # Static sample crypto data
  App.jsx                # Main App component
  index.js               # App entry point
CryptoTable.css          # Styles for crypto table

## ✨ Features

- 🚀 Simulated real-time crypto updates (price, % changes, volume)
- 📈 Color-coded price changes (green for positive, red for negative)
- 🖥️ Responsive design for desktop and mobile
- 📊 Static 7D chart for each asset
- 🧠 Optimized state management using Redux selectors
- 🔄 Updates every 1-2 seconds (mock WebSocket simulation)

🚀 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the project locally
bash
Copy
Edit
npm start
4. Open your browser and visit
plaintext
Copy
Edit
http://localhost:3000/
