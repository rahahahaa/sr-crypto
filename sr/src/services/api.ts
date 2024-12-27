import axios from 'axios';
import { CryptoResponse } from '../types/crypto';

const BINANCE_API_URL = 'https://api.binance.com/api/v3';

export const fetchTopCryptos = async () => {
  try {
    const response = await axios.get(`${BINANCE_API_URL}/ticker/24hr`);
    const topPairs = response.data
      .filter((pair: any) => pair.symbol.endsWith('USDT'))
      .slice(0, 10)
      .map((crypto: any) => ({
        symbol: crypto.symbol.replace('USDT', ''),
        price: crypto.lastPrice,
        volume: crypto.volume,
        priceChangePercent: crypto.priceChangePercent,
        marketCap: (parseFloat(crypto.lastPrice) * parseFloat(crypto.volume)).toString()
      }));
    return topPairs;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
};