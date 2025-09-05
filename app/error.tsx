'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto px-4 py-6 min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-text-primary mb-2">
            Something went wrong!
          </h2>
          <p className="text-text-secondary text-sm">
            We encountered an error while loading BaseShip Agents. Please try again.
          </p>
        </div>

        <PrimaryButton onClick={reset} className="mx-auto">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </PrimaryButton>
      </div>
    </div>
  );
}
