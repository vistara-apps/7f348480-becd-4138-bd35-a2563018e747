'use client';

import { useEffect } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { useMiniKit } from '@coinbase/onchainkit/minikit';

export function WalletConnection() {
  const { setFrameReady } = useMiniKit();
  
  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gradient">BaseShip Agents</h1>
          <p className="text-gray-400 text-sm">Automate your shipping bounties</p>
        </div>
      </div>
      
      <Wallet>
        <ConnectWallet className="btn-primary">
          <Avatar className="w-6 h-6" />
          <Name className="text-sm" />
        </ConnectWallet>
      </Wallet>
    </div>
  );
}
