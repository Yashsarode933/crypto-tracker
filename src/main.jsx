import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import Provider
import { Provider } from 'react-redux';
// 2. Import the store
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap App with Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
