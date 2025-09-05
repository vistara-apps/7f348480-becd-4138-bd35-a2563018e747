'use client';

import { cn } from '@/lib/utils';

interface FrameContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default';
}

export function FrameContainer({ 
  children, 
  className = '',
  variant = 'default' 
}: FrameContainerProps) {
  return (
    <div className={cn(
      'max-w-md mx-auto px-4 py-6',
      'min-h-screen bg-gradient-to-br from-bg via-surface to-bg',
      className
    )}>
      {children}
    </div>
  );
}
