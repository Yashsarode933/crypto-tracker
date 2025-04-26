// src/features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Sample initial data
const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      price: 63000,
      percentChange1h: 0.5,
      percentChange24h: 1.2,
      percentChange7d: 3.5,
      marketCap: 1200000000000,
      volume24h: 25000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      price: 3100,
      percentChange1h: -0.2,
      percentChange24h: 0.8,
      percentChange7d: 4.1,
      marketCap: 400000000000,
      volume24h: 15000000000,
      circulatingSupply: 117000000,
      maxSupply: null,
    },
    {
        id: 3,
        name: 'Tether',
        symbol: 'USDT',
        logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        price: 1,
        percentChange1h: 0.01,
        percentChange24h: 0.1,
        percentChange7d: -0.05,
        marketCap: 83000000000,
        volume24h: 40000000000,
        circulatingSupply: 83000000000,
        maxSupply: null,
      },
      {
        id: 4,
        name: 'BNB',
        symbol: 'BNB',
        logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
        price: 600,
        percentChange1h: 0.3,
        percentChange24h: -1.2,
        percentChange7d: 2.7,
        marketCap: 93000000000,
        volume24h: 3000000000,
        circulatingSupply: 150000000,
        maxSupply: 200000000,
      },
      {
        id: 5,
        name: 'Solana',
        symbol: 'SOL',
        logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        price: 140,
        percentChange1h: -0.5,
        percentChange24h: 1.4,
        percentChange7d: 5.2,
        marketCap: 60000000000,
        volume24h: 5000000000,
        circulatingSupply: 430000000,
        maxSupply: null,
      },      
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateRandomCryptoData: (state) => {
      // Randomly update prices and percentages
      state.assets.forEach((asset) => {
        const randomFactor = 1 + (Math.random() - 0.5) * 0.01; // ±0.5%
        asset.price = parseFloat((asset.price * randomFactor).toFixed(2));
        asset.percentChange1h = parseFloat((Math.random() * 2 - 1).toFixed(2)); // -1% to +1%
        asset.percentChange24h = parseFloat((Math.random() * 4 - 2).toFixed(2)); // -2% to +2%
        asset.percentChange7d = parseFloat((Math.random() * 10 - 5).toFixed(2)); // -5% to +5%
        asset.volume24h = parseFloat((asset.volume24h * randomFactor).toFixed(2));
      });
    },
  },
});

export const { updateRandomCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
