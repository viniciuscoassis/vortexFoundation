import { createPublicClient, getContract, http, parseAbi } from "viem";
import { fantom } from "viem/chains";
import { create } from "zustand";
import {vortexABI}  from "../abi/vortex";
interface VortexStore {
    loadingProgress: number;
    totalBurned: number;
    setBurns: () => Promise<void>;
  }
const useVortexStore = create<VortexStore>((set) => ({
    loadingProgress: 0,
    totalBurned: 0,
    setBurns: async () => {
      const fantomRpcUrl = "https://fantom-mainnet.g.alchemy.com/v2/ppc64JWys0oHEL1_uU34FtWRwy64_Tq8";
      const vortexCA = '0x16e17Bf68F99DA63326677431efEB1F6FfD46eDe';
      const client = createPublicClient({
        chain: fantom,
        transport: http(fantomRpcUrl),
      });
      
      const contract = getContract({
        address: vortexCA,
        abi: vortexABI,
        client,
      })

      const events = await contract.abi;
    }}));

export default useVortexStore;
