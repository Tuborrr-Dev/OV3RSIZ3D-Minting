"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAccount, useChainId, useSwitchChain, useDisconnect } from "wagmi";
import { robinhoodChain } from "./chains";
import { PHASES, PhaseInfo, TOTAL_SUPPLY, DEMO_MODE } from "./constants";
import confetti from "canvas-confetti";

interface Web3ContextType {
  // Real or simulated connection
  isConnected: boolean;
  address: string | null;
  balanceEth: string;
  isWrongNetwork: boolean;
  switchToRobinhood: () => Promise<void>;
  connectDemoWallet: () => void;
  disconnectWallet: () => void;
  isDemoMode: boolean;

  // Minting state
  currentPhase: PhaseInfo;
  setCurrentPhaseId: (phaseId: string) => void;
  mintedCount: number;
  userTokensHeld: number;
  quantity: number;
  setQuantity: (qty: number) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  unitPriceEth: number | null;
  totalPriceEth: number | null;
  
  // Mint execution
  isMinting: boolean;
  mintSuccessTx: string | null;
  mintError: string | null;
  executeMint: () => Promise<void>;
  clearMintStatus: () => void;

  // Allowlist Checker
  checkAddress: string;
  setCheckAddress: (addr: string) => void;
  checkStatus: "IDLE" | "CHECKING" | "ELIGIBLE_GTD" | "ELIGIBLE_FCFS" | "NOT_ELIGIBLE" | "ERROR";
  runEligibilityCheck: (addressOverride?: string) => Promise<void>;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  // Real Wagmi state
  const { address: wagmiAddress, isConnected: wagmiConnected } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { disconnectAsync } = useDisconnect();

  // Demo fallback state (only active when DEMO_MODE is true)
  const [demoConnected, setDemoConnected] = useState(false);
  const [demoAddress] = useState<string>("0x7E49c63Da81C92BFb1E4488A01A06b83E58F882A");
  const [simulatedWrongNet, setSimulatedWrongNet] = useState(false);

  // Mint state
  const [currentPhaseId, setCurrentPhaseId] = useState<string>("gtd");
  const [mintedCount, setMintedCount] = useState<number>(DEMO_MODE ? 1842 : 0);
  const [userTokensHeld, setUserTokensHeld] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [mintSuccessTx, setMintSuccessTx] = useState<string | null>(null);
  const [mintError, setMintError] = useState<string | null>(null);

  // Allowlist checker state
  const [checkAddress, setCheckAddress] = useState<string>("");
  const [checkStatus, setCheckStatus] = useState<"IDLE" | "CHECKING" | "ELIGIBLE_GTD" | "ELIGIBLE_FCFS" | "NOT_ELIGIBLE" | "ERROR">("IDLE");

  const isConnected = wagmiConnected || (DEMO_MODE && demoConnected);
  const address = wagmiConnected
    ? wagmiAddress || null
    : DEMO_MODE && demoConnected
    ? demoAddress
    : null;

  // Check wrong network: if real wagmi connected and chain != robinhood, or simulated
  const isWrongNetwork = wagmiConnected
    ? chainId !== robinhoodChain.id
    : DEMO_MODE
    ? simulatedWrongNet
    : false;

  const switchToRobinhood = async () => {
    if (wagmiConnected && switchChainAsync) {
      try {
        await switchChainAsync({ chainId: robinhoodChain.id });
      } catch (err) {
        console.error("Failed to switch network:", err);
      }
    } else if (DEMO_MODE) {
      setSimulatedWrongNet(false);
    }
  };

  const connectDemoWallet = () => {
    if (DEMO_MODE) {
      setDemoConnected(true);
    }
  };

  const disconnectWallet = async () => {
    if (wagmiConnected) {
      await disconnectAsync();
    }
    if (DEMO_MODE) {
      setDemoConnected(false);
    }
  };

  const currentPhase = PHASES.find((p) => p.id === currentPhaseId) || PHASES[1];

  const unitPriceEth: number | null = DEMO_MODE
    ? currentPhase.priceEth ?? 0.045
    : currentPhase.priceEth;

  const totalPriceEth: number | null = unitPriceEth !== null
    ? Number((quantity * unitPriceEth).toFixed(4))
    : null;

  const maxCap = currentPhase.maxPerWallet ?? 10;

  const incrementQuantity = () => {
    if (quantity < maxCap) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Keep quantity in bound when phase changes
  useEffect(() => {
    if (quantity > maxCap) {
      setQuantity(Math.max(1, maxCap));
    }
  }, [currentPhaseId, maxCap, quantity]);

  const executeMint = async () => {
    if (!DEMO_MODE) {
      return;
    }

    if (!isConnected) {
      connectDemoWallet();
      return;
    }

    if (isWrongNetwork) {
      setMintError("WRONG NETWORK: Switch to Robinhood Chain before initiating mint.");
      return;
    }

    if (mintedCount + quantity > TOTAL_SUPPLY) {
      setMintError("SUPPLY EXHAUSTED: Cannot exceed total allocation of 2,222.");
      return;
    }

    setIsMinting(true);
    setMintError(null);
    setMintSuccessTx(null);

    // Simulate smart contract tx execution
    setTimeout(() => {
      const mockHash = `0x${Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("")}`;

      setMintedCount((prev) => prev + quantity);
      setUserTokensHeld((prev) => prev + quantity);
      setMintSuccessTx(mockHash);
      setIsMinting(false);

      // Trigger celebratory cyber confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FCEE54", "#00E599", "#00F0FF", "#FFFFFF"],
        });
      } catch {
        // Safe fallback if canvas-confetti context isn't ready
      }
    }, 1800);
  };

  const clearMintStatus = () => {
    setMintSuccessTx(null);
    setMintError(null);
  };

  const runEligibilityCheck = async (addressOverride?: string) => {
    if (!DEMO_MODE) {
      return;
    }

    const target = addressOverride !== undefined ? addressOverride : checkAddress;
    const clean = target.trim().toLowerCase();

    if (!clean) {
      setCheckStatus("ERROR");
      return;
    }

    setCheckStatus("CHECKING");

    setTimeout(() => {
      if (clean.endsWith("e") || clean.endsWith("1") || clean.endsWith("4") || clean.includes("gtd")) {
        setCheckStatus("ELIGIBLE_GTD");
      } else if (clean.endsWith("0") || clean.endsWith("2") || clean.includes("fcfs")) {
        setCheckStatus("ELIGIBLE_FCFS");
      } else if (clean.length < 10) {
        setCheckStatus("ERROR");
      } else {
        setCheckStatus("NOT_ELIGIBLE");
      }
    }, 700);
  };

  return (
    <Web3Context.Provider
      value={{
        isConnected,
        address,
        balanceEth: DEMO_MODE ? "1.458 ETH" : "0 ETH",
        isWrongNetwork,
        switchToRobinhood,
        connectDemoWallet,
        disconnectWallet,
        isDemoMode: DEMO_MODE,
        currentPhase,
        setCurrentPhaseId,
        mintedCount,
        userTokensHeld,
        quantity,
        setQuantity,
        incrementQuantity,
        decrementQuantity,
        unitPriceEth,
        totalPriceEth,
        isMinting,
        mintSuccessTx,
        mintError,
        executeMint,
        clearMintStatus,
        checkAddress,
        setCheckAddress,
        checkStatus,
        runEligibilityCheck,
      }}
    >
      {children}
      {DEMO_MODE && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-signalRed text-white text-center font-mono text-[11px] py-1 tracking-widest font-bold select-none pointer-events-none uppercase">
          DEMO MODE: NO REAL TRANSACTIONS
        </div>
      )}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
}
