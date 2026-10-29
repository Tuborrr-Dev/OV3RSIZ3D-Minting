# OV3RSIZ3D Mint Site: Project Spec

Read this file fully before writing any code. If something here conflicts with a request, ask before proceeding.

## 1. What we are building
A mint website for the OV3RSIZ3D NFT collection on Robinhood Chain (EVM, Arbitrum Orbit L2).
Three parts in one monorepo: smart contract, backend API, web frontend.
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
  /api         Node + TypeScript + Fastify + Postgres (Drizzle ORM)
/client        Next.js (App Router) + TypeScript + Tailwind + wagmi + viem + RainbowKit
/docs          Notes, deployment checklist
AGENTS.md      This file
.env.example   One in /core/api, one in /client. NEVER commit real secrets.
```
Each package has its own README, package.json (or foundry.toml) and lint config. Do not add other top-level folders besides /docs.

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
- Signer private key is read from env only. Never log it, never return it.
- Rate-limit all endpoints. Validate wallet addresses (EIP-55) and normalise to lowercase for storage.
- Admin CLI scripts (not public endpoints) to export lists and manually add or remove wallets.

## 7. Client requirements (`/client`)
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

## 8. Design direction (from the live oversizednft.xyz site)
- Dark-first. Near-black background with a dark purple cyberpunk skyline backdrop.
- Primary accent: electric yellow (approx `#FCEE54`). Use sparingly for headlines, borders, CTAs.
- Secondary accents: red for status and errors, green for success tags.
- Headline wordmark in leetspeak: OV3RSIZ3D. Wide geometric/techno display font for headings (Orbitron-style), Roboto for body.
- Hero headline has a subtle chromatic-aberration glitch effect. Use glitch on transitions only, not constant motion.
- Angular, notched cyberpunk dividers between sections.
- Top strip text: "ESTABLISHED ON BLOCKCHAIN - LIMITED EDITION".
- Nav: sneak peaks, about, apply (becomes allowlist/mint), X icon link.
- Logo assets will be dropped into `/client/public/brand/`. Use placeholders until then.

## 9. Security rules (non-negotiable)
- No private keys, API secrets or signer keys in the repo or in client bundles
- Contract: no upgradeability, no hidden owner powers beyond those listed in section 5
- Do not deploy to mainnet from agent sessions. Mainnet deploy is a manual step by the maintainer.
- Every contract change needs matching tests before merge

## 10. Build order for the agent
1. Scaffold /core/contracts, /core/api and /client with README, lint, formatting, `.env.example`, CI (GitHub Actions: lint + test)
2. Contract + tests
3. API + DB schema + voucher signing
4. Client pages with mocked data, then wire to contract and API
5. Testnet deploy and end-to-end test of all four phases
6. Stop and report. Mainnet and reveal are manual.
