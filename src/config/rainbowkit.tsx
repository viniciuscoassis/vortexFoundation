import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { fantom } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Vortex",
  chains: [fantom],
  projectId: "48ccc68f3cade7c852d71e4c11b4e4f7",
  ssr: true,
  transports: {
    [fantom.id]: http(
      "https://fantom-mainnet.g.alchemy.com/v2/ppc64JWys0oHEL1_uU34FtWRwy64_Tq8"
    ),
  },
});
