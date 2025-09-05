// Contract addresses (placeholder - replace with actual deployed contracts)
export const CONTRACTS = {
  BOUNTY_MARKETPLACE: '0x1234567890123456789012345678901234567890',
  AGENT_REGISTRY: '0x0987654321098765432109876543210987654321',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  BASE_RPC: 'https://mainnet.base.org',
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
} as const;

// App configuration
export const APP_CONFIG = {
  MAX_AGENTS_PER_USER: 5,
  MIN_BOUNTY_REWARD: '0.001', // ETH
  MAX_BOUNTY_REWARD: '10', // ETH
  TRANSACTION_FEE_PERCENTAGE: 2.5,
} as const;

// Status colors and labels
export const STATUS_CONFIG = {
  active: {
    label: 'Active',
    color: 'text-green-400',
    bgColor: 'bg-green-500',
  },
  assigned: {
    label: 'Assigned',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500',
  },
  completed: {
    label: 'Completed',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500',
  },
  cancelled: {
    label: 'Cancelled',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500',
  },
  failed: {
    label: 'Failed',
    color: 'text-red-400',
    bgColor: 'bg-red-500',
  },
  idle: {
    label: 'Idle',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500',
  },
  busy: {
    label: 'Busy',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500',
  },
  offline: {
    label: 'Offline',
    color: 'text-gray-500',
    bgColor: 'bg-gray-600',
  },
} as const;
