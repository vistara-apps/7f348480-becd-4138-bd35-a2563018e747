'use client';

import { cn } from '@/lib/utils';
import { STATUS_CONFIG } from '@/lib/constants';
import type { StatusBadgeProps } from '@/lib/types';

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  
  const baseClasses = 'status-badge';
  
  const statusClasses = {
    active: 'status-active',
    completed: 'status-completed',
    failed: 'status-failed',
    idle: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
    busy: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    offline: 'bg-gray-600/20 text-gray-500 border border-gray-600/30',
    assigned: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    cancelled: 'status-failed',
  };

  return (
    <span className={cn(
      baseClasses,
      variant === 'active' && 'status-active',
      variant === 'completed' && 'status-completed',
      variant === 'failed' && 'status-failed',
      !variant && statusClasses[status]
    )}>
      {config.label}
    </span>
  );
}
