import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { getChainConfig } from "./chains";

const { chain, rpcUrl } = getChainConfig();

export const config = getDefaultConfig({
  appName: "Vortex",
  chains: [chain],
  projectId: "48ccc68f3cade7c852d71e4c11b4e4f7",
  ssr: true,
  transports: {
    [chain.id]: http(rpcUrl),
  },
});
