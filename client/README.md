# OV3RSIZ3D Mint Site Frontend (`/client`)

Web3 mint frontend for the OV3RSIZ3D NFT collection (2,222 supply) on Robinhood Chain (Arbitrum Orbit L2).

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Custom Cyberpunk Chamfered Design Tokens
- **Web3:** Wagmi v2 + Viem + RainbowKit + TanStack React Query
- **Effects:** Web Audio API Synth Simulator, Canvas Confetti, SVG Cyber Cityscape, 3D Wireframe Cage

## Routes
- `/` — Hero with 3D wireframe cage & vector skyline, collection stats, lore manifesto, sneak peeks lookbook, mint station, roadmap, FAQ.
- `/mint` — Phase countdown, phase timeline (Team, GTD, FCFS, Public), live minted progress counter, wallet connector, mint button, "You hold" indicator.
- `/allowlist` — Community surveillance task checklist, Merkle tree eligibility query terminal with real-time feedback.
- `/about` — Full doctrine, 500GSM Portuguese textile engineering, NFC microchip integration, Robinhood Chain architecture.

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
