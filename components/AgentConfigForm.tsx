'use client';

import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import type { AgentConfiguration } from '@/lib/types';

interface AgentConfigFormProps {
  initialConfig: AgentConfiguration;
  onSave: (config: AgentConfiguration) => void;
  onClose: () => void;
  variant?: 'simple' | 'advanced';
}

export function AgentConfigForm({ 
  initialConfig, 
  onSave, 
  onClose,
  variant = 'simple' 
}: AgentConfigFormProps) {
  const [config, setConfig] = useState<AgentConfiguration>(initialConfig);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(config);
      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="glass-card p-6 w-full max-w-md space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Configure Agent
          </h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Max Concurrent Bounties */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Max Concurrent Bounties
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={config.maxConcurrentBounties}
              onChange={(e) => setConfig({
                ...config,
                maxConcurrentBounties: parseInt(e.target.value) || 1
              })}
              className="w-full bg-gray-800 bg-opacity-40 border border-white border-opacity-20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Min Reward Threshold */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Min Reward Threshold (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              value={config.minRewardThreshold}
              onChange={(e) => setConfig({
                ...config,
                minRewardThreshold: e.target.value
              })}
              className="w-full bg-gray-800 bg-opacity-40 border border-white border-opacity-20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Auto Accept */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 text-sm">
              Auto Accept Bounties
            </label>
            <button
              onClick={() => setConfig({
                ...config,
                autoAccept: !config.autoAccept
              })}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                config.autoAccept 
                  ? 'bg-purple-500' 
                  : 'bg-gray-600'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                config.autoAccept ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Advanced Settings */}
          {variant === 'advanced' && (
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Preferred Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {['Electronics', 'Clothing', 'Books', 'Food', 'Other'].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      const categories = config.preferredCategories.includes(category)
                        ? config.preferredCategories.filter(c => c !== category)
                        : [...config.preferredCategories, category];
                      setConfig({ ...config, preferredCategories: categories });
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      config.preferredCategories.includes(category)
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 bg-opacity-40 text-gray-300 border border-white border-opacity-20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
          <PrimaryButton
            onClick={handleSave}
            loading={isSaving}
            className="flex-1"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Config
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
