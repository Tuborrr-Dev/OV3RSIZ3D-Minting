# OV3RSIZ3D Mint Site: Project Spec

Read this file fully before writing any code. If something here conflicts with a request, ask before proceeding.

## 1. What we are building
A mint website for the OV3RSIZ3D NFT collection on Robinhood Chain (EVM, Arbitrum Orbit L2).
Three parts in one repo: smart contract (Solidity), backend API (Python), client website (TypeScript/JavaScript).
This is a NEW collection mint. It is separate from the future "Fitting Room" app, but routes and code must not block that app living under the same domain later.

## 2. Locked decisions
- Supply: 2222 total
- Phases, in order: Team, GTD, FCFS, Public
  - Team: 22 tokens, owner-only mint, counted inside the 2222
  - GTD: 1 per wallet, requires a backend-signed voucher
  - FCFS: 1 per wallet, requires a backend-signed voucher
  - Public: open to everyone
- Chain: Robinhood Chain. Chain ID, RPC URL and explorer URL come from env vars, never hardcoded. Maintainers fill them in from Robinhood's official developer docs.

## 3. Placeholders (do NOT invent real values; keep as config)
- Mint price per phase: `MINT_PRICE_*` in contract constructor / config
- Public per-wallet cap: default 2, configurable
- Mint start time: placeholder timestamp, configurable by owner via `setPhase()`
- Royalty: default 5%, configurable via ERC-2981
- Metadata base URI and unrevealed URI: configurable by owner

## 4. Repo layout
Repo: OV3RSIZ3D-Minting. Two main folders: core (contracts + API) and client (website).
```
/core
  /contracts   Foundry project (Solidity ^0.8.24, OpenZeppelin, ERC721A)
  /api         Python 3.12 + FastAPI + PostgreSQL (SQLAlchemy 2 + Alembic), pytest, ruff
/client        Next.js (App Router) + TypeScript + Tailwind + wagmi + viem + RainbowKit
  /client/src              The real site: app/ (routes), components/, lib/ (constants, wagmi, web3 context), data/ (copy as typed data files)
  /client/public           Static assets: brand/ (skyline), entities/ (collection art, .webp)
  /client/prototype        FROZEN Google Stitch export. Design reference only. Never edit, serve or copy code from it.
/docs          Notes, deployment checklist
AGENTS.md      This file
.env.example   One in /core/api, one in /client. NEVER commit real secrets.
```
Each package has its own README and tooling config (foundry.toml, pyproject.toml, package.json). Do not add other top-level folders besides /docs.

## 5. Contract requirements (`/core/contracts`)
- ERC721A, Ownable, ReentrancyGuard, ERC2981
- Phase enum: Closed, Team, GTD, FCFS, Public. Owner switches phase.
- `teamMint(address to, uint256 qty)` onlyOwner, hard cap 22 total
- `allowlistMint(uint8 phase, bytes sig)` verifies an EIP-712 signature from `signer` over (wallet, phase, maxQty, expiry); enforces 1 per wallet per phase
- `publicMint(uint256 qty)` enforces public cap and msg.value
- Max supply enforced on every mint path
- `setSigner`, `setPhase`, `setPrices`, `setBaseURI`, `setUnrevealedURI`, `reveal()`, `withdraw()`
- Unrevealed URI is served until `reveal()` is called
- Tests (Foundry): every phase, wrong phase, wrong price, over-cap, expired and reused signatures, supply exhaustion, withdraw, reveal
- Deploy scripts for testnet and mainnet. Source must be verified on the chain's Blockscout explorer.

## 6. API requirements (`/core/api`)
- `POST /allowlist/register`: wallet + X handle; creates a pending entry
- `POST /allowlist/verify-tasks`: checks X tasks via X OAuth and the X API; promotes to GTD or FCFS based on config (task list is a config file, not code)
- `GET /allowlist/status/:wallet`: eligibility for the client eligibility checker
- `POST /mint/voucher`: returns a signed EIP-712 voucher for an eligible wallet in the currently open phase
- Language: Python. Sign EIP-712 vouchers with `eth-account`; read chain state with `web3.py` if needed.
- Signer private key is read from env only. Never log it, never return it.
- Rate-limit all endpoints (slowapi or equivalent). Validate wallet addresses (EIP-55) and normalise to lowercase for storage.
- Admin CLI scripts (Typer, not public endpoints) to export lists and manually add or remove wallets.

## 7. Client requirements (`/client`)
Current state (2026-10-30): the Next.js 14 app already exists in /client and runs on localhost:3000 with `npm run dev`. Pages: /, /mint, /allowlist, /about. The wallet, mint and allowlist logic is SIMULATED (src/lib/web3-context.tsx) until the contract and API exist; it is off unless NEXT_PUBLIC_DEMO_MODE=true.
Staging: Vercel, project root directory `client`, framework preset Next.js, every push to main redeploys. Production: Firebase Hosting (the live domain already points at it). Build the client as a STATIC Next.js export (`output: 'export'`, `images.unoptimized: true`, output folder `out/`). No SSR, no Next.js API routes: all chain reads happen in the browser, and the Python API is hosted separately.
Routes:
- `/` hero, collection stats, sneak peeks, roadmap, FAQ
- `/allowlist` task checklist, wallet input, eligibility checker
- `/mint` countdown, phase timeline, minted counter (read from contract), connect wallet, mint button, "You hold" line
- `/about`
Rules:
- Wrong-network banner with a "Switch network" button
- Clear states: not connected, not eligible, phase closed, minting, success (tx link), error (readable message)
- Mobile-first. Read all live state (supply, phase, price) from the contract, not from the API.
- Define Robinhood Chain as a custom chain in wagmi from env vars.

## 7b. Frontend conventions (the standard for this repo)
- Next.js App Router, TypeScript, Tailwind 3. `@/` = `client/src`. Named exports for components in `src/components`; `"use client"` only where needed.
- Copy and lists live in typed files under `src/data/` (or `src/lib/constants.ts`), not inline in JSX, so edits do not touch markup.
- Reuse tokens from `tailwind.config.ts` and `globals.css`: colours `electricYellow`, `signalRed`, `signalGreen`, `glitchCyan`; fonts `font-headline` (Space Grotesk), `font-body` (Roboto Flex), `font-mono` (Space Mono); shapes `.clip-chamfer*`, `.clip-card-notch`; `.scanlines`. Do not introduce a second design language.
- Images: collection art in `client/public/entities/*.webp`, shown through `src/components/ArtFrame.tsx`. Never recolour, filter or overlay the artwork; effects go on frames only. No hot-linked images.
- Motion: glitch is a one-shot transition, never constant. Everything animated respects `prefers-reduced-motion`.
- Accessibility: semantic landmarks, keyboard support, visible focus, text contrast 4.5:1 on dark.
- No new npm packages without asking. Before finishing any task run `npm run lint` and `npm run build` in /client and report changed files.

## 7c. Content rule (non-negotiable)
Only use copy that the maintainer has supplied in a prompt or in /docs. Never invent specs, materials, prices, dates, partners, contract addresses, metrics or features. Unknown values display as "TBA". Known facts: 2,222 supply; hand-drawn hooded entities in oversized clothing; Robinhood Chain (Arbitrum Orbit L2); phases Team (22), GTD (1 per wallet), FCFS (1 per wallet), Public; mint date TBA (planned Q4 2026); mint price TBA; The Fitting Room is a free app, built for holders first. There are no physical garments, NFC chips or merchandise in the project.

## 8. Design direction (from the live oversizednft.xyz site)
- Dark-first. Near-black background with a dark purple cyberpunk skyline backdrop.
- Primary accent: electric yellow (approx `#FCEE54`). Use sparingly for headlines, borders, CTAs.
- Secondary accents: red for status and errors, green for success tags.
- Headline wordmark in leetspeak: OV3RSIZ3D. Display/headline font is Space Grotesk, body is Roboto Flex, labels are Space Mono (as configured in tailwind.config.ts).
- Hero headline has a subtle chromatic-aberration glitch effect. Use glitch on transitions only, not constant motion.
- Angular, notched cyberpunk dividers between sections.
- Top strip text: "ESTABLISHED ON BLOCKCHAIN - LIMITED EDITION".
- Nav: sneak peeks, field guide, roadmap, about, allowlist, mint, X icon link (https://x.com/oversizednft).
- Logo assets go in `/client/public/brand/`. Home sections: hero, The Edition strip, Field Guide (id field-guide), Sneak Peeks (id sneak-peeks), Mint Station, Roadmap (id roadmap), FAQ.

## 9. Security rules (non-negotiable)
- No private keys, API secrets or signer keys in the repo or in client bundles
- Contract: no upgradeability, no hidden owner powers beyond those listed in section 5
- Do not deploy to mainnet from agent sessions. Mainnet deploy is a manual step by the maintainer.
- Every contract change needs matching tests before merge

## 10. Build order for the agent
1. Scaffold /core/contracts, /core/api (Python) and /client with README, lint, formatting, `.env.example`, CI (GitHub Actions: lint + test)
2. Contract + tests
3. API + DB schema + voucher signing
4. Client pages with mocked data, then wire to contract and API
5. Testnet deploy and end-to-end test of all four phases
6. Stop and report. Mainnet and reveal are manual.