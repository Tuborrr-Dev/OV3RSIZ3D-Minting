// Field Guide data — no JSX. All copy is exact as specified. Do not add facts, numbers, or traits.

export type Tribe = {
  id: string;
  index: number; // 1-based display
  name: string;
  line: string;
  hex: string; // frame/border/glow colour
  textHex: string; // readable on black (pre-verified contrast)
  image: string | null;
  alt: string;
  classified?: boolean; // Brown tribe: redacted in UI
};

export const TRIBES: Tribe[] = [
  {
    id: "grey",
    index: 1,
    name: "GREY",
    line: "The observers. First to arrive. Last to be understood.",
    hex: "#9CA3AF",
    textHex: "#D1D5DB",
    image: "/entities/entity-grey-selfie.webp",
    alt: "Grey entity taking a selfie with a peace sign, wearing a black tee",
  },
  {
    id: "blue",
    index: 2,
    name: "BLUE",
    line: "Cloaked in silence. Their presence rewrites the air around them.",
    hex: "#3B82F6",
    textHex: "#93C5FD",
    image: "/entities/entity-blue-cloak.webp",
    alt: "Blue entity under an oversized black hooded cloak",
  },
  {
    id: "yellow",
    index: 3,
    name: "YELLOW",
    line: "Loud by nature. They do not blend — they signal.",
    hex: "#FCEE54",
    textHex: "#FCEE54",
    image: "/entities/entity-yellow-jacket.webp",
    alt: "Yellow entity in an open black leather jacket",
  },
  {
    id: "green",
    index: 4,
    name: "GREEN",
    line: "Underground by choice. They build what others overlook.",
    hex: "#22C55E",
    textHex: "#86EFAC",
    image: "/entities/entity-green-bucket.webp",
    alt: "Green entity in a black bucket hat and brown hoodie",
  },
  {
    id: "red",
    index: 5,
    name: "RED",
    line: "Classified.",
    hex: "#E8384F",
    textHex: "#FCA5A5",
    image: null,
    alt: "Red tribe entity — art incoming",
  },
  {
    id: "brown",
    index: 6,
    name: "BROWN",
    line: "Redacted by order of the field office. Access restricted.",
    hex: "#92400E",
    textHex: "#D97706",
    image: null, // No image for Brown tribe
    alt: "Brown tribe entity — unknown",
    classified: true,
  },
];

// ── FILE 01 ──────────────────────────────────────────────────────────────────
export const FILE_01 = {
  label: "FILE 01 / 05",
  title: "THE SUBJECT",
  pullQuote: "It became a style.",
  body: [
    "2,222 entities. Hand-drawn. Hooded. Arrived on Robinhood Chain.",
    "Nobody commissioned them. Nobody planned the drop in a boardroom. Someone drew one, someone else drew another, and before long there were 2,222 of them — each one distinct, each one dressed in something oversized.",
    "The silhouette became the signal. The hoodie became the uniform.",
  ],
};

// ── FILE 02 ──────────────────────────────────────────────────────────────────
export const FILE_02 = {
  label: "FILE 02 / 05",
  title: "ORIGIN SEQUENCE",
  intro:
    "No recorded origin event. No coordinates. No transmission log. The field office reconstructed the sequence from cultural residue alone.",
  timeline: [
    { step: "01", event: "Entities show up" },
    { step: "02", event: "People copy the silhouette" },
    { step: "03", event: "It gets a name" },
  ],
  closing:
    "The sequence is documented. The source is not. That is consistent with every prior arrival on record.",
};

// ── FILE 03 ──────────────────────────────────────────────────────────────────
export const FILE_03 = {
  label: "FILE 03 / 05",
  title: "TRIBE TAXONOMY",
  intro:
    "Six tribes identified. Classification is ongoing. One file remains sealed.",
};

// ── FILE 04 ──────────────────────────────────────────────────────────────────
export const FILE_04 = {
  label: "FILE 04 / 05",
  title: "ACQUISITION PROTOCOL",
  intro: "Four entry points. One chain. Quantity is finite.",
  phases: [
    {
      tag: "TEAM",
      slots: "22",
      rule: "Reserved — owner mint only",
    },
    {
      tag: "GTD",
      slots: "1 / WALLET",
      rule: "Guaranteed — voucher required",
    },
    {
      tag: "FCFS",
      slots: "1 / WALLET",
      rule: "First come, first served — voucher required",
    },
    {
      tag: "PUBLIC",
      slots: "OPEN",
      rule: "No voucher — open to all",
    },
  ],
  wlTitle: "WL DISTRIBUTION",
  wlSlots: [
    "Handpicking",
    "Website Application",
    "Collabs",
    "Contests",
  ],
  statusLine: "MINT DATE: TBA — PLANNED Q4 2026",
  footnote: "Full phase breakdown available in the",
  footnoteLink: { label: "Roadmap", href: "#roadmap" },
};

// ── FILE 05 ──────────────────────────────────────────────────────────────────
export const FILE_05 = {
  label: "FILE 05 / 05",
  title: "THE FITTING ROOM",
  intro:
    "A free app. Built for holders first. Not merchandise. Not physical.",
  features: [
    {
      icon: "VEST",
      title: "Try On",
      body: "Layer the wardrobe onto your entity. See it before it exists.",
    },
    {
      icon: "LOCK",
      title: "Holders First",
      body: "Built for holders first. Access expands over time.",
    },
    {
      icon: "EYE",
      title: "No Tracking",
      body: "No biometrics. No scans. What you wear is your business.",
    },
    {
      icon: "GRID",
      title: "Wardrobe System",
      body: "Pieces drop. Some are earned. None are sold separately.",
    },
  ],
  privacyLine: "No biometrics. No scans. What you wear is your business.",
  accessLine: "Holder access details in the",
  accessLink: { label: "Roadmap", href: "#roadmap" },
  bigQuote:
    "\u201cThe Fitting Room is not a store. It is a space.\u201d",
  tags: ["FREE APP", "HOLDERS FIRST", "ROBINHOOD CHAIN", "NO PHYSICAL GOODS"],
  appFrameLabel: "APP PROTOTYPE",
  closingLine:
    "The Fitting Room is free. The wardrobe is not infinite. The entities are.",
};
