# BaseShip Agents

A Base mini app that connects users to a ship-to-earn bounty marketplace, allowing them to launch automated shipping agents that interact with the Base marketplace smart contract.

## Features

- **Secure Smart Contract Interaction**: Robust module for interacting with Base marketplace smart contracts
- **Automated Agent Management**: Deploy and monitor automated shipping agents
- **Bounty Creation & Discovery**: Create and find shipping bounties with ease
- **Performance Tracking**: Transparent tracking of agent performance and rewards

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: OnchainKit with MiniKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd baseship-agents
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your OnchainKit API key and other configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key from Coinbase Developer Platform
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL (optional)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key (optional)

## Architecture

### Data Model

- **User**: Farcaster handle, Base wallet address, creation timestamp
- **Bounty**: Description, reward amount, status, creator, assigned agent
- **Agent**: Name, configuration, status, performance metrics

### Components

- **FrameContainer**: Main app container with mobile-first design
- **BountyCard**: Display and interact with shipping bounties
- **AgentCard**: Manage and monitor shipping agents
- **WalletConnection**: OnchainKit wallet integration
- **Dashboard**: Main interface with metrics and navigation

### Smart Contract Integration

The app is designed to interact with Base marketplace smart contracts for:
- Creating and managing bounties
- Agent registration and assignment
- Reward distribution and tracking

## Design System

- **Colors**: Purple/blue gradient theme with high contrast
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Glass morphism cards with consistent spacing
- **Motion**: Smooth transitions and loading states

## Deployment

The app is optimized for deployment on Vercel or similar platforms:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
