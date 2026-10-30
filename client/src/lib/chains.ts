import { defineChain } from "viem";

const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID || "12345");
const chainName = process.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain";
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || "https://rpc.robinhood-chain.example";
const explorerUrl = process.env.NEXT_PUBLIC_EXPLORER_URL || "https://explorer.robinhood-chain.example";

export const robinhoodChain = defineChain({
  id: chainId,
  name: chainName,
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: [rpcUrl],
    },
    public: {
      http: [rpcUrl],
    },
  },
  blockExplorers: {
    default: {
      name: "Robinhood Explorer",
      url: explorerUrl,
    },
  },
  testnet: true,
});
