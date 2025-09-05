'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'processing';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ 
  children, 
  onClick, 
  variant = 'default',
  disabled = false,
  className = '',
  type = 'button'
}: PrimaryButtonProps) {
  const isProcessing = variant === 'processing';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isProcessing}
      className={cn(
        'btn-primary',
        'flex items-center justify-center gap-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    >
      {isProcessing && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
