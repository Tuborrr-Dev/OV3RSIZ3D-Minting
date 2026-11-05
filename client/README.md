# OV3RSIZ3D Mint Site Frontend (`/client`)

Web3 mint frontend for the OV3RSIZ3D NFT collection (2,222 supply) on Robinhood Chain (Arbitrum Orbit L2).

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Custom Cyberpunk Chamfered Design Tokens
- **Web3:** Wagmi v2 + Viem + RainbowKit + TanStack React Query
- **Target:** Static export (`output: "export"`)

## Routes
- `/` — Hero with geometric star & cyber skyline, The Edition metrics strip, sneak peeks, mint station, roadmap anchor, FAQ.
- `/mint` — Phase timeline (Team, GTD, FCFS, Public), minted progress counter, wallet connector, mint station, "You hold" indicator.
- `/allowlist` — Allowlist task information and signed voucher eligibility terminal.
- `/about` — Collection overview, The Fitting Room app intro, links to field guide and roadmap.

## Getting Started

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
