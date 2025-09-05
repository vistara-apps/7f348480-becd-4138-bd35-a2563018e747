'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'default' | 'processing';
  className?: string;
  type?: 'button' | 'submit';
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'default',
  className,
  type = 'button'
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        'btn-primary',
        variant === 'processing' && 'opacity-75 cursor-not-allowed',
        isDisabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {loading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      )}
      {children}
    </button>
  );
}
