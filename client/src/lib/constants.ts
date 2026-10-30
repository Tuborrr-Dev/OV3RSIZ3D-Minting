export interface Specimen {
  id: string;
  number: string;
  name: string;
  tier: "MYTHIC" | "APEX" | "ELITE" | "RELIC";
  hoodie: string;
  special: string;
  hardware: string;
  imageUrl: string;
  dataAlt: string;
}

export const SPECIMENS: Specimen[] = [
  {
    id: "spec-1",
    number: "#0421",
    name: "KAGE-04",
    tier: "MYTHIC",
    hoodie: "500GSM CHARCOAL",
    special: "CYAN HUD V2",
    hardware: "COBRA BUCKLE",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5JADvD48_z9Bphppr5ReJg-ZGmdjb3gByf_NL0EoJpH08SI3ygn_X0XzMS0OlBjxgO9GsohGqKA-8nzHafpiirPuwK4x5HvBnnWF0Yno583DlT56DCK4zCrOgOIUt05YNbktfYki_H_wsKMWcpA3623x4J0zxKH2nQfr0BNrzq-9PfoX0D5M_fY8vYkEjU31VHQLv7e0cTR0qS3q7KAkhWrVoUoT7G69OweMq3rc",
    dataAlt: "Hooded extraterrestrial alien character wearing oversized charcoal heavyweight hoodie with technical chest straps.",
  },
  {
    id: "spec-2",
    number: "#1089",
    name: "TOXIC-X",
    tier: "APEX",
    hoodie: "ACID WASH RAW",
    special: "DIGITAL RESPIRATOR",
    hardware: "0.42% DROP RARITY",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRedS4TAUIz0YAKUiFL4UzDYZ1jAh_PBz7RNUE7twM0sqwQIlr2FTWicx9EBVPoy3h5O_o6KELDEax7zIP1gEN0RXUW2CBlWj1-5KpFc28cNqzj5yRsa_UGPiuUC-qyU5DFCoX-lzPODbIKiAwehVH-iTRyCmzgmk0UQUCA9b0glex7U4kn2ORfYwZn3KZDdlqCTHpmRtTEn4VvJsc9oFLXULzjRBMGnBgnmA3hoc",
    dataAlt: "Oversized hooded alien in distressed acid-wash parka with electric yellow digital respirator mask.",
  },
  {
    id: "spec-3",
    number: "#1733",
    name: "ENFORCER-09",
    tier: "ELITE",
    hoodie: "SOLAR YELLOW",
    special: "TACTICAL BALLISTIC RIG",
    hardware: "SLIT STROBE REFLECTOR",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp8ozkM8ITnXQSiguH4AQWCiAkSbg1I7uZ5X724aM3Cp1m7b9V2QCWbv4jIq75Jo6vOenu2XeWW5AgLDldqy3yrWqWvLuqYkTZSHqanZTNB8zFnHT7-vnTrV2ZVSnoUSHKHFH20_F3NpDqW_T_8Be5OE8u6p4tUb8xwT4hufrz7LwnFN-CtNStj9r87Z9odENSGAskF3K9APsZz0p-45rzWJIrLIKbitziQrnPPZ8",
    dataAlt: "Extraterrestrial creature in voluminous tactical ballistic vest over oversized electric yellow streetwear hoodie.",
  },
  {
    id: "spec-4",
    number: "#2204",
    name: "NOMAD-Z",
    tier: "RELIC",
    hoodie: "NINJA THERMAL PONCHO",
    special: "EMBROIDERED GLYPHS",
    hardware: "NFC-0982-RH CHIP",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaTvy5WHPhO0Vpvml9aTtrSsM_berrUtBL_NDmxChpDRaUWEUVzutlR9BvlkVz5Sr1BF_XnEIymeqeQJdsggA91ZX51_9eDGm-psLtng_LJuagOnvRymHbXxr3oyXw7Z1KqvOMh8TNqMkDDQXZvkmL9DVu3qMrLUYFR-xmiG2Vjq9CTmakm2sgSMZmCTygTLZVSCyOH9vCAMPR3f5hZoY7hNIfq8Rsa38v9WiKwQQ",
    dataAlt: "Hooded extraterrestrial street nomad wearing dual-layered oversized ninja balaclava and heavy thermal poncho.",
  },
];

export interface PhaseInfo {
  id: string;
  name: string;
  label: string;
  priceEth: number;
  maxPerWallet: number;
  status: "PAST" | "LIVE" | "UPCOMING";
  description: string;
}

export const PHASES: PhaseInfo[] = [
  {
    id: "team",
    name: "Team Allocation",
    label: "PHASE 00",
    priceEth: 0,
    maxPerWallet: 22,
    status: "PAST",
    description: "22 tokens hardcapped for core architects & vault archive.",
  },
  {
    id: "gtd",
    name: "Guaranteed (GTD)",
    label: "PHASE 01",
    priceEth: 0.015,
    maxPerWallet: 1,
    status: "LIVE",
    description: "Guaranteed mint pass with signed backend cryptographic voucher.",
  },
  {
    id: "fcfs",
    name: "Waitlist FCFS",
    label: "PHASE 02",
    priceEth: 0.018,
    maxPerWallet: 1,
    status: "UPCOMING",
    description: "First-Come-First-Served allowlist allocation prior to public release.",
  },
  {
    id: "public",
    name: "Public Access",
    label: "PHASE 03",
    priceEth: 0.022,
    maxPerWallet: 2,
    status: "UPCOMING",
    description: "Open to all interstellar travelers on Robinhood Chain.",
  },
];

export const TOTAL_SUPPLY = 2222;

export const FAQ_ITEMS = [
  {
    question: "WHAT IS OV3RSIZ3D?",
    answer: "OV3RSIZ3D is a strictly capped collection of 2,222 hooded extraterrestrials engineered on Robinhood Chain (Arbitrum Orbit L2). Each NFT pairs digital on-chain provenance with physical cut-and-sew heavyweight luxury garments equipped with tamper-proof NFC hardware microchips.",
  },
  {
    question: "WHAT CHAIN IS THIS MINTED ON?",
    answer: "The drop is deployed natively to Robinhood Chain, an ultra-low latency Arbitrum Orbit Layer 2 network. This provides gas-subsidized, sub-second transaction finality with zero network congestion.",
  },
  {
    question: "HOW DOES PHYSICAL REDEMPTION WORK?",
    answer: "Token holders gain exclusive access to order bespoke physical garments manufactured in Portugal using 500GSM double-faced terry cotton. Each piece arrives embedded with an encrypted NFC chip linked directly to your digital asset.",
  },
  {
    question: "WHAT ARE THE ALLOWLIST REQUIREMENTS?",
    answer: "GTD and FCFS tiers require completing community verification tasks and submitting your Robinhood EVM wallet. Eligible addresses receive an EIP-712 cryptographic signature to mint directly from the contract.",
  },
  {
    question: "WHEN DOES METADATA REVEAL OCCUR?",
    answer: "Tokens will initially display unrevealed tactical cryptographic schematics. The collection reveal will be initiated by the deployer once the mint sequence concludes.",
  },
];

export const ROADMAP_STAGES = [
  {
    phase: "01",
    title: "GENESIS MINT & ON-CHAIN PROVENANCE",
    status: "CURRENT",
    bullets: [
      "2,222 Total Supply deployed on Robinhood Chain",
      "Gas-optimized ERC-721A smart contract architecture",
      "EIP-712 signed allowlist protection (GTD & FCFS)",
      "Initial trait generation and diagnostic reveal sequence",
    ],
  },
  {
    phase: "02",
    title: "NFC CHIP & PHYSICAL CAPSULE FORGING",
    status: "IN PROGRESS",
    bullets: [
      "Custom 500GSM double terry textile manufacturing in Portugal",
      "Bespoke tactical hardware (cobra buckles, utility carabiners)",
      "Embedded cryptographic NFC microchip pairing",
      "Worldwide insured cold-chain logistics delivery",
    ],
  },
  {
    phase: "03",
    title: "DIGITAL TWIN & THE FITTING ROOM APP",
    status: "UPCOMING",
    bullets: [
      "Exclusive web app enabling 3D digital wearability",
      "AR camera filters scanning your physical NFC chip",
      "Token-gated holder dashboard and reward distributions",
      "Secondary marketplace integration on Robinhood Orbit",
    ],
  },
  {
    phase: "04",
    title: "INTERDIMENSIONAL PHYGITAL EXPANSION",
    status: "UPCOMING",
    bullets: [
      "IRL underground pop-up activations in Tokyo & Berlin",
      "Collaborative drops with heritage technical streetwear labels",
      "Subterranean community DAO governance for capsule drops",
    ],
  },
];
