'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FrameContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default';
}

export function FrameContainer({ 
  children, 
  className,
  variant = 'default' 
}: FrameContainerProps) {
  return (
    <div className={cn(
      'max-w-md mx-auto px-4 py-6 min-h-screen',
      variant === 'default' && 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
      className
    )}>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}
