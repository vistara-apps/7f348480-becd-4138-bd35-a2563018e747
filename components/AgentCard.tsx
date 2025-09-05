'use client';

import { useState } from 'react';
import { Bot, Settings2, Star, TrendingUp } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { PrimaryButton } from './PrimaryButton';
import { formatEth, formatNumber, calculateSuccessRate } from '@/lib/utils';
import type { AgentCardProps } from '@/lib/types';

export function AgentCard({ 
  agent, 
  onConfigure,
  onToggleStatus 
}: AgentCardProps) {
  const [isToggling, setIsToggling] = useState(false);

  const handleToggleStatus = async () => {
    if (!onToggleStatus) return;
    setIsToggling(true);
    try {
      await onToggleStatus(agent.agentId);
    } finally {
      setIsToggling(false);
    }
  };

  const successRate = calculateSuccessRate(
    agent.performanceMetrics.totalBountiesCompleted,
    agent.performanceMetrics.totalBountiesCompleted + 2 // Mock failed bounties
  );

  return (
    <div className="glass-card p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{agent.name}</h3>
            <p className="text-gray-300 text-sm">Agent #{agent.agentId.slice(-6)}</p>
          </div>
        </div>
        <StatusBadge status={agent.status} />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-xs">Earnings</span>
          </div>
          <p className="text-white font-semibold">
            {formatEth(agent.performanceMetrics.totalEarnings)}
          </p>
        </div>

        <div className="metric-card">
          <div className="flex items-center space-x-2 mb-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300 text-xs">Success Rate</span>
          </div>
          <p className="text-white font-semibold">{successRate}%</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-300">
        <span>{formatNumber(agent.performanceMetrics.totalBountiesCompleted)} completed</span>
        <span>⭐ {agent.performanceMetrics.rating.toFixed(1)}</span>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <PrimaryButton
          onClick={handleToggleStatus}
          loading={isToggling}
          className="flex-1"
          variant={agent.status === 'active' ? 'processing' : 'default'}
        >
          {agent.status === 'active' ? 'Pause' : 'Activate'}
        </PrimaryButton>
        
        {onConfigure && (
          <button
            onClick={() => onConfigure(agent.agentId)}
            className="btn-secondary p-3"
          >
            <Settings2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
