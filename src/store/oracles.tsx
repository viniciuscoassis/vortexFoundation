import { create } from "zustand";
import { oraclesABI } from "../data/abi/oracles";
import axios from "axios";
import { createPublicClient, getContract, http } from "viem";
import { fantom } from "viem/chains";
import pLimit from "p-limit";

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
    const fantomRpcUrl =
      "https://fantom-mainnet.g.alchemy.com/v2/ppc64JWys0oHEL1_uU34FtWRwy64_Tq8";
    const contractAddress = "0x4d5ea4d0a31965531146e81689c224f2929ae3e2";
    const client = createPublicClient({
      chain: fantom,
      transport: http(fantomRpcUrl),
    });

    const contract = getContract({
      address: contractAddress,
      abi: oraclesABI,
      client,
    });

    const tokenCount = Number(await contract.read.totalSupply());

    if (tokenCount === 0) {
      set({ loadingProgress: 100 });
      return;
    }

    const limit = pLimit(10); // limitar a 10 requisições simultâneas

    const requests = Array.from({ length: tokenCount }).map((_, i) =>
      limit(async () => {
        const storedOracle = localStorage.getItem(`oracle_${i}`);

        if (storedOracle) {
          // se já existe no localStorage, usa o valor salvo
          return JSON.parse(storedOracle);
        }

        // se não existe, faz a requisição para o IPFS
        const tokenURI = String(await contract.read.tokenURI([i]));
        const { data } = await axios.get(
          tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
        );

        // armazena no localStorage
        localStorage.setItem(`oracle_${i}`, JSON.stringify(data));

        // atualiza a barra de progresso
        set((state) => ({
          loadingProgress: state.loadingProgress + 87 / tokenCount,
        }));

        return data;
      })
    );

    const results = await Promise.all(requests);

    set({ oracles: results });
    set({ loadingProgress: 100 });
  },
}));

export default useOraclesStore;
