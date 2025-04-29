import { create } from "zustand";
import { explorersABI } from "../data/abi/explorers";
import { createPublicClient, getContract, http } from "viem";
import { getChainConfig } from "../config/chains";

interface Explorer {
  tokenId: number;
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

interface ExplorersStore {
  explorers: Explorer[];
  loadingProgress: number;
  totalSupply: number;
  setExplorers: () => Promise<void>;
  getExplorersBalance: (walletAddress: string) => Promise<number>;
}

const DEFAULT_EXPLORERS: Explorer[] = [];
const DEFAULT_TOTAL_SUPPLY = 0;
const IPFS_GATEWAY = "https://gateway.lighthouse.storage/ipfs/";

const useExplorersStore = create<ExplorersStore>((set, get) => ({
  explorers: DEFAULT_EXPLORERS,
  loadingProgress: 0,
  totalSupply: DEFAULT_TOTAL_SUPPLY,
  setExplorers: async () => {
    try {
      const { chain, rpcUrl, contracts } = getChainConfig();
      
      // Check if contract address is valid
      if (!contracts.explorers || contracts.explorers === '0x...') {
        console.log('No valid contract address found for explorers');
        set({ explorers: DEFAULT_EXPLORERS, totalSupply: DEFAULT_TOTAL_SUPPLY, loadingProgress: 100 });
        return;
      }

      const client = createPublicClient({
        chain,
        transport: http(rpcUrl),
      });

      const contract = getContract({
        address: contracts.explorers,
        abi: explorersABI,
        client,
      });

      const tokenCount = Number(await contract.read.totalMinted());
      console.log(tokenCount);
      set({ totalSupply: tokenCount });

      if (tokenCount === 0) {
        set({ loadingProgress: 100 });
        return;
      }

      const explorers = [];
      for (let i = 1; i <= tokenCount; i++) {
        try {
          const tokenURI = await contract.read.tokenURI([i]) as string;
          const response = await fetch(tokenURI.replace("ipfs://", IPFS_GATEWAY));
          const data = await response.json();
          explorers.push({
            tokenId: i,
            ...data
          });
        } catch (error) {
          console.error(`Error fetching explorer ${i}:`, error);
        }
      }

      set({ explorers });
    } catch (error) {
      console.error('Error setting explorers:', error);
      set({ explorers: DEFAULT_EXPLORERS, totalSupply: DEFAULT_TOTAL_SUPPLY });
    } finally {
      set({ loadingProgress: 100 });
    }
  },
  getExplorersBalance: async (walletAddress: string): Promise<number> => {
    try {
      const { chain, rpcUrl, contracts } = getChainConfig();
      
      // Check if contract address is valid
      if (!contracts.explorers || contracts.explorers === '0x...') {
        console.log('No valid contract address found for explorers');
        return 0;
      }

      const client = createPublicClient({
        chain,
        transport: http(rpcUrl),
      });

      const contract = getContract({
        address: contracts.explorers,
        abi: explorersABI,
        client,
      });

      const balance = await contract.read.balanceOf([walletAddress]);
      return Number(balance);
    } catch (error) {
      console.error('Error getting explorers balance:', error);
      return 0;
    }
  }
}));

export default useExplorersStore; 