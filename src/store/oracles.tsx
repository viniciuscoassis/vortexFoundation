import Web3 from 'web3';
import { create } from 'zustand';
import oraclesAbi from '../abi/oracles.json';
import axios from 'axios';

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
}
interface OraclesStore {
  oracles: Oracle[];
  loadingProgress: number;
  setOracles: () => Promise<void>;
}

const useOraclesStore = create<OraclesStore>((set) => ({
  oracles: [],
  loadingProgress: 0,
  setOracles: async () => {
    const fantomRpcUrl = "https://rpc.ftm.tools/";
    const contractAddress = '0x4d5ea4d0a31965531146e81689c224f2929ae3e2';
    const web3 = new Web3(fantomRpcUrl);
    const contract = new web3.eth.Contract(oraclesAbi, contractAddress);

    const tokenCount = Number(await contract.methods.totalSupply().call());

    if (tokenCount === 0) {
      set({ loadingProgress: 100 });
      return;
    }

    const requests = Array.from({ length: tokenCount }).map(async (_, i) => {
      const tokenURI: any = await contract.methods.tokenURI(i).call();
      const { data } = await axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
      set((state: any) => ({ loadingProgress: state.loadingProgress + (87 / tokenCount) }));
      return data;
    });

    const results = await Promise.all(requests);
    set({ oracles: results });
    set({ loadingProgress: 100 });
  }
}));

export default useOraclesStore;
