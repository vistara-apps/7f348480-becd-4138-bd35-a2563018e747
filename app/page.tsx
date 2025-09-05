'use client';

import { FrameContainer } from '@/components/FrameContainer';
import { WalletConnection } from '@/components/WalletConnection';
import { Dashboard } from '@/components/Dashboard';

export default function HomePage() {
  return (
    <FrameContainer>
      <WalletConnection />
      <Dashboard />
    </FrameContainer>
  );
}
