import React, { useEffect } from 'react';
import CryptoTable from './components/CryptoTable';
import { useDispatch } from 'react-redux';
import { updateRandomCryptoData } from './features/crypto/cryptoSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateRandomCryptoData());
    }, 1500); // update every 1.5 seconds

    return () => clearInterval(interval); // clean up
  }, [dispatch]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Crypto Price Tracker 💸</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
