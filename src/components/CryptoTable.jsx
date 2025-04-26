// src/components/CryptoTable.jsx
import './CryptoTable.css';
import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="crypto-table-container overflow-x-auto rounded-lg shadow-lg bg-white p-4">
      <table className="crypto-table w-full text-sm text-gray-700">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">1h %</th>
            <th className="p-4">24h %</th>
            <th className="p-4">7d %</th>
            <th className="p-4">Market Cap</th>
            <th className="p-4">24h Volume</th>
            <th className="p-4">Circulating Supply</th>
            <th className="p-4">Max Supply</th>
            <th className="p-4">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
