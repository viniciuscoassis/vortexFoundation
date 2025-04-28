import { sonic, sonicBlazeTestnet } from 'viem/chains'

export const getChainConfig = () => {
  const isTestnet = process.env.NEXT_PUBLIC_NETWORK === 'testnet'
  
  return {
    chain: isTestnet ? sonicBlazeTestnet : sonic,
    rpcUrl: isTestnet 
      ? process.env.NEXT_PUBLIC_TESTNET_RPC_URL 
      : process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
    contracts: {
      oracles: isTestnet
        ? (process.env.NEXT_PUBLIC_TESTNET_ORACLES_CONTRACT_ADDRESS as `0x${string}`)
        : (process.env.NEXT_PUBLIC_MAINNET_ORACLES_CONTRACT_ADDRESS as `0x${string}`),
      explorers: isTestnet
        ? (process.env.NEXT_PUBLIC_TESTNET_EXPLORERS_CONTRACT_ADDRESS as `0x${string}`)
        : (process.env.NEXT_PUBLIC_MAINNET_EXPLORERS_CONTRACT_ADDRESS as `0x${string}`),
      vortex: isTestnet
        ? (process.env.NEXT_PUBLIC_TESTNET_VORTEX_TOKEN_CONTRACT_ADDRESS as `0x${string}`)
        : (process.env.NEXT_PUBLIC_MAINNET_VORTEX_TOKEN_CONTRACT_ADDRESS as `0x${string}`)
    }
  }
} 