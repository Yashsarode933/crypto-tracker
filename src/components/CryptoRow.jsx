// src/components/CryptoRow.jsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'; // NEW import!

const CryptoRow = ({ asset, index }) => {
  const renderChange = (change) => (
    <div className="flex items-center justify-center gap-1">
      {change >= 0 ? (
        <ArrowUpRight className="w-4 h-4 text-green-500" />
      ) : (
        <ArrowDownRight className="w-4 h-4 text-red-500" />
      )}
      <span className={change >= 0 ? 'text-green-500' : 'text-red-500'}>
        {change?.toFixed(2)}%
      </span>
    </div>
  );

  return (
    <tr className="border-b hover:bg-gray-100 transition">
      <td className="p-4 text-center">{index + 1}</td>

      <td className="p-4 flex items-center gap-2">
        <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="font-semibold">{asset.name}</span>
          <span className="text-gray-500 text-xs">{asset.symbol.toUpperCase()}</span>
        </div>
      </td>

      <td className="p-4">${asset.price.toLocaleString()}</td>

      <td className="p-4">{renderChange(asset.percentChange1h)}</td>
      <td className="p-4">{renderChange(asset.percentChange24h)}</td>
      <td className="p-4">{renderChange(asset.percentChange7d)}</td>

      <td className="p-4">${asset.marketCap.toLocaleString()}</td>

      <td className="p-4">${asset.volume24h.toLocaleString()}</td>

      <td className="p-4">
        {asset.circulatingSupply.toLocaleString()} {asset.symbol.toUpperCase()}
      </td>

      <td className="p-4">
        {asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}
      </td>

      <td className="p-4">
        <img
          src={`https://www.coinlore.com/img/${asset.symbol.toLowerCase()}.svg`}
          alt="chart"
          className="h-8"
        />
      </td>
    </tr>
  );
};

export default CryptoRow;
