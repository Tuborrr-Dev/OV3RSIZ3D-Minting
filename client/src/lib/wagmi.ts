import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { robinhoodChain } from "./chains";
import { http } from "viem";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "c4f79cc821944d9680842e34466bfbd";

export const config = getDefaultConfig({
  appName: "OV3RSIZ3D Mint Site",
  projectId,
  chains: [robinhoodChain],
  transports: {
    [robinhoodChain.id]: http(),
  },
  ssr: true,
});
