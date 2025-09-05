'use client';

import { cn } from '@/lib/utils';
import { STATUS_CONFIG } from '@/lib/constants';
import type { StatusBadgeProps } from '@/lib/types';

export function StatusBadge({ 
  status, 
  variant 
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  
  return (
    <span className={cn(
      'status-badge',
      variant === 'active' && 'status-active',
      variant === 'completed' && 'status-completed',
      variant === 'failed' && 'status-failed',
      !variant && `${config.bgColor} bg-opacity-20 ${config.color} border border-current border-opacity-30`
    )}>
      {config.label}
    </span>
  );
}
