export interface PhaseInfo {
  id: string;
  name: string;
  label: string;
  priceEth: number | null;
  maxPerWallet: number | null;
  status: "PAST" | "LIVE" | "UPCOMING";
  description: string;
}

export const PHASES: PhaseInfo[] = [
  {
    id: "team",
    name: "Team Allocation",
    label: "PHASE 00",
    priceEth: null,
    maxPerWallet: 22,
    status: "PAST",
    description: "Owner-only. Counted inside the 2,222.",
  },
  {
    id: "gtd",
    name: "Guaranteed (GTD)",
    label: "PHASE 01",
    priceEth: null,
    maxPerWallet: 1,
    status: "LIVE",
    description: "1 per wallet. Needs an allowlist voucher.",
  },
  {
    id: "fcfs",
    name: "Waitlist FCFS",
    label: "PHASE 02",
    priceEth: null,
    maxPerWallet: 1,
    status: "UPCOMING",
    description: "1 per wallet. Needs an allowlist voucher.",
  },
  {
    id: "public",
    name: "Public Access",
    label: "PHASE 03",
    priceEth: null,
    maxPerWallet: null,
    status: "UPCOMING",
    description: "Open to everyone.",
  },
];

export const TOTAL_SUPPLY = 2222;

export const FAQ_ITEMS = [
  {
    question: "WHAT IS OV3RSIZ3D?",
    answer: "2,222 hand-drawn, hooded entities in oversized clothing, on Robinhood Chain.",
  },
  {
    question: "WHEN IS THE MINT?",
    answer: "The date is TBA. We are planning for Q4 2026.",
  },
  {
    question: "WHAT DOES IT COST?",
    answer: "The price is TBA.",
  },
  {
    question: "HOW DO I GET ON THE ALLOWLIST?",
    answer: "Allowlist spots come from handpicking, website applications, collabs and contests. Collabs are not open yet.",
  },
  {
    question: "WHAT IS THE FITTING ROOM?",
    answer: "A free app, built for holders first. Upload photos of your own clothes and accessories and get randomly generated styling combinations.",
  },
];

export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
