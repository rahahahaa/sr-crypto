import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData } from '../types/crypto';

interface Props {
  crypto: CryptoData;
}

export const CryptoCard: React.FC<Props> = ({ crypto }) => {
  const isPositive = parseFloat(crypto.change24h) >= 0;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">{crypto.symbol}</h3>
        {isPositive ? (
          <TrendingUp className="text-green-400" />
        ) : (
          <TrendingDown className="text-red-400" />
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-white">${parseFloat(crypto.price).toLocaleString()}</p>
        <p className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {crypto.change24h}%
        </p>
      </div>
      <div className="mt-4 text-gray-300">
        <p>Volume: ${parseFloat(crypto.volume).toLocaleString()}</p>
        <p>Market Cap: ${parseFloat(crypto.marketCap).toLocaleString()}</p>
      </div>
    </div>
  );
};