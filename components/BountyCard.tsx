'use client';

import { useState } from 'react';
import { Package, Clock, DollarSign } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { PrimaryButton } from './PrimaryButton';
import { formatEth, formatDuration } from '@/lib/utils';
import type { BountyCardProps } from '@/lib/types';

export function BountyCard({ 
  bounty, 
  variant = 'active',
  onAssign,
  onComplete 
}: BountyCardProps) {
  const [isAssigning, setIsAssigning] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const handleAssign = async () => {
    if (!onAssign) return;
    setIsAssigning(true);
    try {
      // In a real app, this would show an agent selection modal
      await onAssign(bounty.bountyId, 'default-agent');
    } finally {
      setIsAssigning(false);
    }
  };

  const handleComplete = async () => {
    if (!onComplete) return;
    setIsCompleting(true);
    try {
      await onComplete(bounty.bountyId);
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className={`glass-card p-4 space-y-4 ${variant === 'completed' ? 'opacity-75' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Package className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-gray-300">
            Bounty #{bounty.bountyId.slice(-6)}
          </span>
        </div>
        <StatusBadge status={bounty.status} variant={variant} />
      </div>

      {/* Description */}
      <div>
        <p className="text-white font-medium mb-2">
          {bounty.description}
        </p>
      </div>

      {/* Metrics */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-1 text-green-400">
          <DollarSign className="w-4 h-4" />
          <span>{formatEth(bounty.rewardAmount)}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-300">
          <Clock className="w-4 h-4" />
          <span>{formatDuration((Date.now() - bounty.createdAt.getTime()) / (1000 * 60 * 60))} ago</span>
        </div>
      </div>

      {/* Actions */}
      {bounty.status === 'active' && onAssign && (
        <PrimaryButton
          onClick={handleAssign}
          loading={isAssigning}
          className="w-full"
        >
          Assign to Agent
        </PrimaryButton>
      )}

      {bounty.status === 'assigned' && onComplete && (
        <PrimaryButton
          onClick={handleComplete}
          loading={isCompleting}
          className="w-full"
          variant="processing"
        >
          Mark Complete
        </PrimaryButton>
      )}
    </div>
  );
}
