'use client';

import { useState } from 'react';
import { Plus, Bot, Package, TrendingUp } from 'lucide-react';
import { BountyCard } from './BountyCard';
import { AgentCard } from './AgentCard';
import { AgentConfigForm } from './AgentConfigForm';
import { PrimaryButton } from './PrimaryButton';
import { formatEth, formatNumber, generateAgentId, generateBountyId } from '@/lib/utils';
import type { Agent, Bounty, AgentConfiguration } from '@/lib/types';

// Mock data
const mockBounties: Bounty[] = [
  {
    bountyId: generateBountyId(),
    creatorId: 'user1',
    description: 'Ship electronics package from SF to NYC',
    rewardAmount: '0.05',
    status: 'active',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(),
  },
  {
    bountyId: generateBountyId(),
    creatorId: 'user2',
    description: 'Deliver vintage books to collector in LA',
    rewardAmount: '0.03',
    status: 'assigned',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    updatedAt: new Date(),
    assignedAgentId: 'agent1',
  },
];

const mockAgents: Agent[] = [
  {
    agentId: 'agent1',
    userId: 'user1',
    name: 'Lightning Shipper',
    configuration: {
      maxConcurrentBounties: 3,
      minRewardThreshold: '0.01',
      preferredCategories: ['Electronics', 'Books'],
      autoAccept: true,
    },
    status: 'active',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    performanceMetrics: {
      totalBountiesCompleted: 127,
      totalEarnings: '2.45',
      successRate: 94,
      averageCompletionTime: 18,
      rating: 4.8,
    },
  },
];

export function Dashboard() {
  const [bounties, setBounties] = useState<Bounty[]>(mockBounties);
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [activeTab, setActiveTab] = useState<'bounties' | 'agents'>('bounties');
  const [configAgent, setConfigAgent] = useState<Agent | null>(null);

  // Calculate dashboard metrics
  const totalEarnings = agents.reduce((sum, agent) => 
    sum + parseFloat(agent.performanceMetrics.totalEarnings), 0
  );
  const totalBounties = agents.reduce((sum, agent) => 
    sum + agent.performanceMetrics.totalBountiesCompleted, 0
  );
  const activeAgents = agents.filter(agent => agent.status === 'active').length;

  const handleAssignBounty = async (bountyId: string, agentId: string) => {
    setBounties(prev => prev.map(bounty => 
      bounty.bountyId === bountyId 
        ? { ...bounty, status: 'assigned', assignedAgentId: agentId }
        : bounty
    ));
  };

  const handleCompleteBounty = async (bountyId: string) => {
    setBounties(prev => prev.map(bounty => 
      bounty.bountyId === bountyId 
        ? { ...bounty, status: 'completed' }
        : bounty
    ));
  };

  const handleToggleAgentStatus = async (agentId: string) => {
    setAgents(prev => prev.map(agent => 
      agent.agentId === agentId 
        ? { ...agent, status: agent.status === 'active' ? 'idle' : 'active' }
        : agent
    ));
  };

  const handleSaveAgentConfig = async (config: AgentConfiguration) => {
    if (!configAgent) return;
    
    setAgents(prev => prev.map(agent => 
      agent.agentId === configAgent.agentId 
        ? { ...agent, configuration: config }
        : agent
    ));
  };

  const handleCreateAgent = () => {
    const newAgent: Agent = {
      agentId: generateAgentId(),
      userId: 'user1',
      name: `Agent ${agents.length + 1}`,
      configuration: {
        maxConcurrentBounties: 2,
        minRewardThreshold: '0.01',
        preferredCategories: [],
        autoAccept: false,
      },
      status: 'idle',
      createdAt: new Date(),
      performanceMetrics: {
        totalBountiesCompleted: 0,
        totalEarnings: '0',
        successRate: 0,
        averageCompletionTime: 0,
        rating: 5,
      },
    };
    setAgents(prev => [...prev, newAgent]);
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="metric-card text-center">
          <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <p className="text-text-primary font-semibold text-sm">
            {formatEth(totalEarnings)}
          </p>
          <p className="text-text-secondary text-xs">Total Earnings</p>
        </div>
        
        <div className="metric-card text-center">
          <Package className="w-5 h-5 text-blue-400 mx-auto mb-1" />
          <p className="text-text-primary font-semibold text-sm">
            {formatNumber(totalBounties)}
          </p>
          <p className="text-text-secondary text-xs">Completed</p>
        </div>
        
        <div className="metric-card text-center">
          <Bot className="w-5 h-5 text-purple-400 mx-auto mb-1" />
          <p className="text-text-primary font-semibold text-sm">
            {activeAgents}
          </p>
          <p className="text-text-secondary text-xs">Active Agents</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-surface bg-opacity-20 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('bounties')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeTab === 'bounties'
              ? 'bg-purple-500 text-white'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Bounties ({bounties.length})
        </button>
        <button
          onClick={() => setActiveTab('agents')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeTab === 'agents'
              ? 'bg-purple-500 text-white'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Agents ({agents.length})
        </button>
      </div>

      {/* Content */}
      {activeTab === 'bounties' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Available Bounties
            </h2>
            <PrimaryButton className="text-sm px-4 py-2">
              <Plus className="w-4 h-4 mr-1" />
              Create
            </PrimaryButton>
          </div>
          
          <div className="space-y-3">
            {bounties.map((bounty) => (
              <BountyCard
                key={bounty.bountyId}
                bounty={bounty}
                variant={bounty.status === 'completed' ? 'completed' : 'active'}
                onAssign={handleAssignBounty}
                onComplete={handleCompleteBounty}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'agents' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Your Agents
            </h2>
            <PrimaryButton onClick={handleCreateAgent} className="text-sm px-4 py-2">
              <Plus className="w-4 h-4 mr-1" />
              Create
            </PrimaryButton>
          </div>
          
          <div className="space-y-3">
            {agents.map((agent) => (
              <AgentCard
                key={agent.agentId}
                agent={agent}
                onConfigure={(agentId) => {
                  const agent = agents.find(a => a.agentId === agentId);
                  if (agent) setConfigAgent(agent);
                }}
                onToggleStatus={handleToggleAgentStatus}
              />
            ))}
          </div>
        </div>
      )}

      {/* Agent Configuration Modal */}
      {configAgent && (
        <AgentConfigForm
          initialConfig={configAgent.configuration}
          onSave={handleSaveAgentConfig}
          onClose={() => setConfigAgent(null)}
          variant="advanced"
        />
      )}
    </div>
  );
}
