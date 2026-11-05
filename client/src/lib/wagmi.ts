import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { robinhoodChain } from "./chains";
import { http } from "viem";

const rawProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!rawProjectId && process.env.NODE_ENV === "development") {
  console.warn("WalletConnect project ID missing: set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in .env.local");
}

const projectId = rawProjectId || "MISSING_WALLETCONNECT_PROJECT_ID";

export const config = getDefaultConfig({
  appName: "OV3RSIZ3D Mint Site",
  projectId,
  chains: [robinhoodChain],
  transports: {
    [robinhoodChain.id]: http(),
  },
  ssr: true,
});
