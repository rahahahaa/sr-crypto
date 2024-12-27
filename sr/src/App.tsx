import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Toaster } from 'react-hot-toast';
import { CryptoSphere } from './components/3d/CryptoSphere';
import { CryptoCard } from './components/CryptoCard';
import { Header } from './components/Header';
import { SupabasePrompt } from './components/auth/SupabasePrompt';
import { fetchTopCryptos } from './services/api';
import { useAuth } from './components/auth/AuthProvider';
import { isSupabaseConfigured } from './config/supabase';
import { CryptoData } from './types/crypto';

function App() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopCryptos();
      setCryptos(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!isSupabaseConfigured) {
    return <SupabasePrompt />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Toaster position="top-right" />
      <Header user={user} />

      {/* 3D Hero Section */}
      <div className="h-screen relative">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <CryptoSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to the Future of Crypto
          </h2>
          <p className="text-xl text-gray-300">
            Real-time cryptocurrency market data at your fingertips
          </p>
        </div>
      </div>

      {/* Crypto Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Top Cryptocurrencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptos.map((crypto) => (
            <CryptoCard key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;