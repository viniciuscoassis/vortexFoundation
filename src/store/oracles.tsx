import { create } from "zustand";
import { oraclesABI } from "../data/abi/oracles";
import axios from "axios";
import { createPublicClient, createWalletClient, getContract, http } from "viem";
import { getChainConfig } from "../config/chains";
import pLimit from "p-limit";
import { useAccount, useWalletClient } from "wagmi";

interface OracleAttribute {
  trait_type: string;
  value: string;
}

interface Oracle {
  name: string;
  description: string;
  image: string;
  external_url: string;
  background_color: string;
  attributes: OracleAttribute[];
  tokenId?: number;
}

interface OraclesStore {
  oracles: Oracle[];
  loadingProgress: number;
  totalSupply: number;
  setOracles: () => Promise<void>;
  getOraclesBalance: (walletAddress: string) => Promise<number>;
  tokenOfOwnerByIndex: (walletAddress: string, index: number) => Promise<number>;
}

const DEFAULT_ORACLES: Oracle[] = [];
const DEFAULT_TOTAL_SUPPLY = 0;

const useOraclesStore = create<OraclesStore>((set, get) => ({
  oracles: DEFAULT_ORACLES,
  loadingProgress: 0,
  totalSupply: DEFAULT_TOTAL_SUPPLY,
  setOracles: async () => {
    try {
      const { chain, rpcUrl, contracts } = getChainConfig();
      
      // Check if contract address is valid
      if (!contracts.oracles || contracts.oracles === '0x...') {
        console.log('No valid contract address found for oracles');
        set({ oracles: DEFAULT_ORACLES, totalSupply: DEFAULT_TOTAL_SUPPLY, loadingProgress: 100 });
        return;
      }

      const client = createPublicClient({
        chain,
        transport: http(rpcUrl),
      });

      const contract = getContract({
        address: contracts.oracles,
        abi: oraclesABI,
        client,
      });

      const tokenCount = Number(await contract.read.totalSupply());
      console.log(tokenCount);
      set({ totalSupply: tokenCount });

      if (tokenCount === 0) {
        set({ loadingProgress: 100 });
        return;
      }

      const limit = pLimit(10);

      const requests = Array.from({ length: tokenCount }).map((_, i) =>
        limit(async () => {
          const storedOracle = localStorage.getItem(`oracle_${i}`);

          if (storedOracle) {
            const data = JSON.parse(storedOracle);
            data.tokenId = i;
            return data;
          }

          const tokenURI = String(await contract.read.tokenURI([i]));
          const { data } = await axios.get(
            tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
          );
          
          data.tokenId = i;
          localStorage.setItem(`oracle_${i}`, JSON.stringify(data));

          set((state) => ({
            loadingProgress: state.loadingProgress + 87 / tokenCount,
          }));

          return data;
        })
      );

      const results = await Promise.all(requests);
      set({ oracles: results });
    } catch (error) {
      console.error('Error setting oracles:', error);
      set({ oracles: DEFAULT_ORACLES, totalSupply: DEFAULT_TOTAL_SUPPLY });
    } finally {
      set({ loadingProgress: 100 });
    }
  },
  getOraclesBalance: async (walletAddress: string): Promise<number> => {
    try {
      const { chain, rpcUrl, contracts } = getChainConfig();
      
      // Check if contract address is valid
      if (!contracts.oracles || contracts.oracles === '0x...') {
        console.log('No valid contract address found for oracles');
        return 0;
      }

      const client = createPublicClient({
        chain,
        transport: http(rpcUrl),
      });

      const contract = getContract({
        address: contracts.oracles,
        abi: oraclesABI,
        client,
      });

      const oracles = await contract.read.balanceOf([walletAddress]);
      return Number(oracles);
    } catch (error) {
      console.error('Error getting oracles balance:', error);
      return 0;
    }
  },
  tokenOfOwnerByIndex: async (walletAddress: string, index: number) => {
    try {
      const { chain, rpcUrl, contracts } = getChainConfig();
      
      // Check if contract address is valid
      if (!contracts.oracles || contracts.oracles === '0x...') {
        console.log('No valid contract address found for oracles');
        return 0;
      }

      const client = createPublicClient({
        chain,
        transport: http(rpcUrl),
      });

      const contract = getContract({
        address: contracts.oracles,
        abi: oraclesABI,
        client,
      });
      const tokenOfOwnerByIndex = await contract.read.tokenOfOwnerByIndex([walletAddress, index]);
      return Number(tokenOfOwnerByIndex);
    } catch (error) {
      console.error('Error getting token of owner by index:', error);
      return 0;
    }
  }
}));

export default useOraclesStore;
