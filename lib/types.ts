// User entity
export interface User {
  userId: string;
  farcasterHandle?: string;
  baseWalletAddress: string;
  createdAt: Date;
}

// Bounty entity
export interface Bounty {
  bountyId: string;
  creatorId: string;
  description: string;
  rewardAmount: string; // in ETH/Base tokens
  status: 'active' | 'assigned' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  assignedAgentId?: string;
}

// Agent entity
export interface Agent {
  agentId: string;
  userId: string;
  name: string;
  configuration: AgentConfiguration;
  status: 'idle' | 'active' | 'busy' | 'offline';
  createdAt: Date;
  performanceMetrics: AgentPerformance;
}

// Agent configuration
export interface AgentConfiguration {
  maxConcurrentBounties: number;
  minRewardThreshold: string;
  preferredCategories: string[];
  autoAccept: boolean;
}

// Agent performance metrics
export interface AgentPerformance {
  totalBountiesCompleted: number;
  totalEarnings: string;
  successRate: number;
  averageCompletionTime: number; // in hours
  rating: number; // 1-5 stars
}

// Smart contract interaction types
export interface BountyContractData {
  id: string;
  creator: string;
  reward: bigint;
  description: string;
  isActive: boolean;
  assignee?: string;
}

// UI Component props
export interface BountyCardProps {
  bounty: Bounty;
  variant?: 'active' | 'completed';
  onAssign?: (bountyId: string, agentId: string) => void;
  onComplete?: (bountyId: string) => void;
}

export interface AgentCardProps {
  agent: Agent;
  onConfigure?: (agentId: string) => void;
  onToggleStatus?: (agentId: string) => void;
}

export interface StatusBadgeProps {
  status: 'active' | 'completed' | 'failed' | 'idle' | 'busy' | 'offline';
  variant?: 'active' | 'completed' | 'failed';
}
