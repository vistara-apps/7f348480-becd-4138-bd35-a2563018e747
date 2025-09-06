'use client';

import { cn } from '@/lib/utils';
import { STATUS_CONFIG } from '@/lib/constants';
import type { StatusBadgeProps } from '@/lib/types';

export function StatusBadge({ 
  status, 
  variant = 'default'
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium border';
  const sizeClasses = {
    default: 'text-xs px-2 py-1',
    large: 'text-sm px-4 py-2',
  };
  
  const statusClasses = `${config.bgColor} bg-opacity-20 ${config.color} border-current border-opacity-30`;
  
  return (
    <span className={cn(
      baseClasses,
      variant === 'large' ? sizeClasses.large : sizeClasses.default,
      statusClasses
    )}>
      {config.label}
    </span>
  );
}
