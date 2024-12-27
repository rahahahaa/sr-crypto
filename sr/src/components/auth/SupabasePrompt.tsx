import React from 'react';
import { AlertCircle } from 'lucide-react';

export const SupabasePrompt: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-md text-center">
        <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Supabase Connection Required
        </h2>
        <p className="text-gray-300 mb-6">
          Please click the "Connect to Supabase" button in the top right corner to set up your project's authentication system.
        </p>
      </div>
    </div>
  );
};