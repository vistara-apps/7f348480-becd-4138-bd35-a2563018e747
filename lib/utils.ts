import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format ETH amounts for display
export function formatEth(amount: string | number): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (num >= 1) {
    return `${num.toFixed(3)} ETH`;
  }
  return `${(num * 1000).toFixed(1)}m ETH`;
}

// Format large numbers with K/M suffixes
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

// Calculate success rate percentage
export function calculateSuccessRate(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

// Generate random agent ID
export function generateAgentId(): string {
  return `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Generate random bounty ID
export function generateBountyId(): string {
  return `bounty_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Truncate address for display
export function truncateAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Format time duration
export function formatDuration(hours: number): string {
  if (hours < 1) {
    return `${Math.round(hours * 60)}m`;
  }
  if (hours < 24) {
    return `${Math.round(hours)}h`;
  }
  return `${Math.round(hours / 24)}d`;
}

// Validate ETH amount
export function isValidEthAmount(amount: string): boolean {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && num <= 1000;
}
