---
name: Cyberpunk Streetwear
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#ccc7ae'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#95917b'
  outline-variant: '#4a4734'
  surface-tint: '#d7ca31'
  primary: '#ffffff'
  on-primary: '#353100'
  primary-container: '#f4e64d'
  on-primary-container: '#6e6600'
  inverse-primary: '#676000'
  secondary: '#d1bef3'
  on-secondary: '#372854'
  secondary-container: '#51416e'
  on-secondary-container: '#c3b0e4'
  tertiary: '#ffffff'
  on-tertiary: '#003822'
  tertiary-container: '#4dffb2'
  on-tertiary-container: '#00734b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f4e64d'
  primary-fixed-dim: '#d7ca31'
  on-primary-fixed: '#1f1c00'
  on-primary-fixed-variant: '#4e4800'
  secondary-fixed: '#ebddff'
  secondary-fixed-dim: '#d1bef3'
  on-secondary-fixed: '#22123e'
  on-secondary-fixed-variant: '#4e3f6c'
  tertiary-fixed: '#4dffb2'
  tertiary-fixed-dim: '#00e297'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005234'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: 4.25rem
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: 0.04em
  display-md:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: 0.04em
  display-md-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2rem
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: 0.01em
  body-md:
    fontFamily: Roboto Flex
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Roboto Flex
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-lg:
    fontFamily: Space Mono
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.1em
  label-md:
    fontFamily: Space Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Space Mono
    fontSize: 0.625rem
    fontWeight: '500'
    lineHeight: 0.75rem
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an aggressive, subterranean fusion of luxury cyberpunk fashion, Web3 tokenomics, and industrial terminal UI. Built for the 2,222 oversized alien drop, the visual language discards friendly neo-banking tropes in favor of tactical high-contrast Brutalism mixed with sci-fi glitch elements.

### Core Directives
- **Subterranean Luxury:** Evoke underground Tokyo/Neo-Seoul streetwear drops—exclusive, hooded, cloaked in heavy violet shadows, pierced by intense electric light.
- **Terminal Precision:** Structural grids, notched framing, hardware-inspired diagnostic readout tags, and monospaced cryptographic metadata.
- **Controlled Glitch:** Restrained chromatic aberration and scanline textures applied to key brand anchor points without sacrificing transaction readability or fast minting actions.
- **Silhouettes & Scale:** Asymmetrical, weighted visual blocks capturing the physical drape of oversized streetwear silhouettes against angular architectural skeletons.

## Colors

The palette is engineered strictly for dark environments, anchored by a deep obsidian core (`#0A0A0C`) layered over cold, atmospheric violet tones (`#181126` and `#281944`) reminiscent of neon-drenched smog. Electric Yellow (`#FCEE54`) serves as the dominant callout, delivering high luminescence for vital interactive zones and structural borders.

### Functional Palette Structure
- **Surface Canvas (`#0A0A0C`):** Base canvas background, creating total contrast against HUD elements.
- **Surface Container Deep (`#181126`):** Secondary backgrounds, recessed panels, card insets, and cityscape backing visuals.
- **Surface Container Elevated (`#281944`):** Active interactive surfaces, card elevated bodies, and modal containers.
- **Electric Yellow Accent (`#FCEE54`):** Primary action triggers, key metric highlights, neon border states, and focus rings.
- **Signal Red (`#E8384F`):** Hard failures, sold-out alerts, gas spike warnings, and destructive triggers.
- **Vivid Green (`#00E599`):** Live minting states, confirmed transactions, verified rarity badges, and online network indicators.
- **Muted Steel (`#8D889E`):** Secondary technical copy, structural dividers, and inactive state outlines.

## Typography

The typographic hierarchy implements an intentional clash between futuristic industrial display typography and high-density, legible digital readouts.

- **Display & Headlines (`Space Grotesk`):** Delivers wide, mechanical, angular geometric authority. All-caps treatments are mandatory for `display-lg` and `headline-lg` tier elements to enforce industrial branding.
- **Body (`Roboto Flex`):** Guarantees zero-friction readability across dense contract mechanics, lore text, and wallet transaction notices.
- **Labels & Metrics (`Space Mono`):** Dedicated to smart contract data, supply counters (e.g., `2,222 / 2,222`), transaction hashes, and micro-HUD badges. Always rendered uppercase with expanded letter-spacing.

## Layout & Spacing

The layout is built upon an intentional, asymmetric 12-column terminal grid with rigid spacing increments based on an 8px architectural cadence.

### Grid & Breakpoints
- **Desktop (1200px+):** 12-column layout, 3rem margins, 1.5rem gutters. Unbalanced card arrangements (e.g., 7-column feature preview paired with 5-column live mint control module).
- **Tablet (768px – 1199px):** 8-column layout, 2rem margins, 1.25rem gutters. Content reflows vertically into dual-pane stacks.
- **Mobile (320px – 767px):** 4-column layout, 1.25rem margins, 1rem gutters. Fixed bottom utility bars for instant wallet interaction and single-finger mint operations.

### Structural Dividers & Tickers
- **System Top Strip:** A continuous, fixed-height 32px utility banner (`label-sm`, tracking `0.12em`) pinned at the highest visual layer containing: `"ESTABLISHED ON BLOCKCHAIN — LIMITED EDITION // RUN 01"`.
- **Angled Section Cutters:** Sections are demarcated not by linear dividers, but by 45-degree notched step-downs with hairline borders (`1px solid #281944` transitioning into `#FCEE54`).

## Elevation & Depth

Depth is defined by hard structural illumination rather than realistic ambient drop shadows. Surfaces feel extruded from a dark hardware chassis.

### Depth Archetypes
- **Base Terminal (Level 0):** Canvas `#0A0A0C` overlaid with subtle 5% scanline rasterization.
- **HUD Panels (Level 1):** Solid `#181126` backed by a 1px boundary of `#281944`. No drop shadows; strictly sharp planar delineation.
- **Charged Elements (Level 2 - Yellow Luminescence):** Key operational targets receive a targeted electrical bloom: `box-shadow: 0 0 16px -2px rgba(252, 238, 84, 0.35), inset 0 0 0 1px #FCEE54`.
- **Modals & Overlays (Level 3):** Background blur (`backdrop-filter: blur(12px)`) over `#0A0A0C` at 85% opacity, held inside a double-lined perimeter frame featuring contrasting 45-degree outer chamfers.

## Shapes

Curves are eliminated. The shape language is strictly sharp, faceted, and chamfered (`roundedness: 0`), reinforcing brutalist, ballistic streetwear ergonomics.

### Mechanical Silhouette Rules
- **Chamfered / Cut Corners:** Buttons, interactive chips, and high-tier cards utilize a 45-degree clipped corner (`clip-path: polygon(...)`) sized at `8px` or `12px` on the top-right and bottom-left vertices.
- **Structural Notches:** Interactive panels feature machine-stamped recessed notches (indentations on border edges) serving as visual housing for category indicators and index counters.
- **Z-Insignia Emblems:** The core identity badge is an enclosed circle intersected by high-angle diagonal slash cuts forming a fractured "Z", executed with vector line-weights matching primary UI strokes (1.5px to 2px).

## Components

### Buttons
- **Primary Mint Button:** Chamfered opposite corners (top-right, bottom-left at 12px). Solid Electric Yellow (`#FCEE54`) fill with `#0A0A0C` text in `Space Grotesk` Bold. Active state triggers a flash white inversion and a `0 0 24px rgba(252, 238, 84, 0.6)` outward flare.
- **Secondary / Utility Button:** Transparent background, 1px perimeter border in `#FCEE54`, text in `#FCEE54`. Hover fills with `#FCEE54` at 15% opacity with an instant snap transition (0ms delay, 100ms ease-out).

### NFT Showcase Cards
- Framed in `#181126` with a full-bleed 1px yellow stroke (`#FCEE54`).
- Subtle ambient yellow inner and outer glow (`rgba(252, 238, 84, 0.2)`).
- Top corner cut featuring a dynamic index marker (`#0001` through `#2222`) typeset in `Space Mono`.
- Image container features faint crosshair corner brackets overlaying the alien artwork.

### Badges & Status Chips
- Height: 24px, rigid 0px radius with chamfered right edge.
- **Live/Success Tag:** Solid `#00E599` background or 1px border with text `#00E599` on deep black, prefixed by a pulsing square pixel glyph.
- **Error/Sold Out Tag:** Deep blood red background `#E8384F` with stark white uppercase typography.

### Input Fields & Selectors
- Solid `#181126` background with a static 1px border in `#281944`.
- On focus: Border instantly snaps to `#FCEE54` with a sharp 2px bottom tick mark; input caret rendered as a flashing yellow rectangle block (`width: 8px`).
- Monospaced numerical readouts for mint counters, flanked by chamfered `+` and `-` tactical buttons.

### Checkboxes & Segmented Controls
- Binary toggles use sharp diamond or squared radio markers.
- Checked state: `#FCEE54` solid square inset with a contrasting black core dot; no rounded pills.

### Brand Identity Display
- **"OV3RSIZ3D" Wordmark:** Styled with dual-layered offset chromatic aberration (red `#E8384F` shifted -2px horizontal, electric blue/cyan shifted +2px horizontal) combined with an underlying Electric Yellow primary fill, active on hover or trigger pulses.