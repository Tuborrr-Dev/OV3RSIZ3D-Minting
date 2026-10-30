"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAccount, useChainId, useSwitchChain, useDisconnect } from "wagmi";
import { robinhoodChain } from "./chains";
import { PHASES, PhaseInfo, TOTAL_SUPPLY } from "./constants";
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

  // Minting state
  currentPhase: PhaseInfo;
  setCurrentPhaseId: (phaseId: string) => void;
  mintedCount: number;
  userTokensHeld: number;
  quantity: number;
  setQuantity: (qty: number) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  unitPriceEth: number;
  totalPriceEth: number;
  
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

  // Tasks Checklist
  tasks: { id: string; label: string; detail: string; completed: boolean }[];
  toggleTask: (id: string) => void;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  // Real Wagmi state
  const { address: wagmiAddress, isConnected: wagmiConnected } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { disconnectAsync } = useDisconnect();

  // Demo fallback state (allows instant testing without a browser extension)
  const [demoConnected, setDemoConnected] = useState(false);
  const [demoAddress, setDemoAddress] = useState<string>("0x7E49c63Da81C92BFb1E4488A01A06b83E58F882A");
  const [simulatedWrongNet, setSimulatedWrongNet] = useState(false);

  // Mint state
  const [currentPhaseId, setCurrentPhaseId] = useState<string>("gtd");
  const [mintedCount, setMintedCount] = useState<number>(1842);
  const [userTokensHeld, setUserTokensHeld] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [mintSuccessTx, setMintSuccessTx] = useState<string | null>(null);
  const [mintError, setMintError] = useState<string | null>(null);

  // Allowlist checker state
  const [checkAddress, setCheckAddress] = useState<string>("");
  const [checkStatus, setCheckStatus] = useState<"IDLE" | "CHECKING" | "ELIGIBLE_GTD" | "ELIGIBLE_FCFS" | "NOT_ELIGIBLE" | "ERROR">("IDLE");

  // Community tasks
  const [tasks, setTasks] = useState([
    {
      id: "task-follow",
      label: "FOLLOW @OV3RSIZ3D ON X",
      detail: "Join official surveillance channel for drop broadcasts",
      completed: true,
    },
    {
      id: "task-repost",
      label: "REPOST GENESIS MANIFESTO",
      detail: "Signal cryptographic clearance to network peers",
      completed: true,
    },
    {
      id: "task-discord",
      label: "LINK DISCORD IDENTIFIER",
      detail: "Verify holder role in the subterranean underground bunker",
      completed: false,
    },
    {
      id: "task-wallet",
      label: "REGISTER ROBINHOOD EVM ADDRESS",
      detail: "Generate EIP-712 leaf node for smart contract voucher",
      completed: true,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const isConnected = wagmiConnected || demoConnected;
  const address = wagmiConnected ? wagmiAddress || null : demoConnected ? demoAddress : null;

  // Check wrong network: if real wagmi connected and chain != robinhood, or simulated
  const isWrongNetwork = wagmiConnected
    ? chainId !== robinhoodChain.id
    : simulatedWrongNet;

  const switchToRobinhood = async () => {
    if (wagmiConnected && switchChainAsync) {
      try {
        await switchChainAsync({ chainId: robinhoodChain.id });
      } catch (err) {
        console.error("Failed to switch network:", err);
      }
    } else {
      setSimulatedWrongNet(false);
    }
  };

  const connectDemoWallet = () => {
    setDemoConnected(true);
  };

  const disconnectWallet = async () => {
    if (wagmiConnected) {
      await disconnectAsync();
    }
    setDemoConnected(false);
  };

  const currentPhase = PHASES.find((p) => p.id === currentPhaseId) || PHASES[1];
  const unitPriceEth = currentPhase.priceEth;
  const totalPriceEth = Number((quantity * unitPriceEth).toFixed(4));

  const incrementQuantity = () => {
    if (quantity < currentPhase.maxPerWallet) {
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
    if (quantity > currentPhase.maxPerWallet) {
      setQuantity(Math.max(1, currentPhase.maxPerWallet));
    }
  }, [currentPhaseId, currentPhase.maxPerWallet, quantity]);

  const executeMint = async () => {
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
    const target = addressOverride !== undefined ? addressOverride : checkAddress;
    const clean = target.trim().toLowerCase();

    if (!clean) {
      setCheckStatus("ERROR");
      return;
    }

    setCheckStatus("CHECKING");

    setTimeout(() => {
      // Deterministic simulation based on wallet string
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
        balanceEth: "1.458 ETH",
        isWrongNetwork,
        switchToRobinhood,
        connectDemoWallet,
        disconnectWallet,
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
        tasks,
        toggleTask,
      }}
    >
      {children}
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
