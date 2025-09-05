'use client';

import { cn } from '@/lib/utils';
import { STATUS_CONFIG } from '@/lib/constants';
import type { StatusBadgeProps } from '@/lib/types';

export function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  
  const baseClasses = 'status-badge';
  const variantClasses = {
    default: 'text-xs',
    large: 'text-sm px-4 py-2',
  };
  
  const statusClasses = {
    active: 'status-active',
    completed: 'status-completed',
    failed: 'status-failed',
    idle: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
    paused: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    assigned: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    cancelled: 'status-failed',
  };

  return (
    <span className={cn(
      baseClasses,
      variantClasses[variant],
      statusClasses[status]
    )}>
      {config.label}
    </span>
  );
}
