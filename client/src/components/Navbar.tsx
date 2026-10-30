"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlitchWordmark } from "./GlitchWordmark";
import { useWeb3 } from "@/lib/web3-context";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wallet, Menu, X, ExternalLink, ShieldCheck } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isConnected, address, connectDemoWallet, disconnectWallet } = useWeb3();

  const navLinks = [
    { href: "/#sneak-peeks", label: "Sneak Peeks" },
    { href: "/about", label: "About" },
    { href: "/allowlist", label: "Allowlist" },
    { href: "/mint", label: "MINT", highlight: true },
  ];

  return (
    <>
      {/* Main Cyberpunk Header */}
      <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo & Leetspeak Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full border border-electricYellow flex items-center justify-center bg-black p-1.5 group-hover:shadow-[0_0_14px_rgba(252,238,84,0.6)] transition-all">
              {/* Circle-Z Emblem */}
              <svg
                className="w-full h-full stroke-electricYellow fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="52" r="33" />
                <line x1="27" y1="30" x2="73" y2="30" />
                <line x1="27" y1="74" x2="73" y2="74" />
                <line x1="73" y1="30" x2="27" y2="74" />
                <line x1="34" y1="34" x2="18" y2="18" />
                <line x1="66" y1="34" x2="82" y2="18" />
              </svg>
            </div>
            <GlitchWordmark size="header" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-150 py-1 ${
                    link.highlight
                      ? "text-electricYellow font-bold border-b-2 border-electricYellow"
                      : isActive
                      ? "text-white font-bold border-b border-white"
                      : "text-neutral-400 hover:text-electricYellow"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Cluster (X Link + Connect Wallet) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Official X Profile */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official X profile"
              className="w-9 h-9 border border-white/10 hover:border-electricYellow/60 bg-black flex items-center justify-center text-neutral-300 hover:text-electricYellow transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* RainbowKit Wallet Connect Integration with Demo Fallback */}
            <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                if (!connected && !isConnected) {
                  return (
                    <button
                      onClick={openConnectModal || connectDemoWallet}
                      className="clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all shadow-[0_0_15px_rgba(252,238,84,0.3)] active:scale-95 flex items-center gap-2"
                    >
                      <Wallet className="w-4 h-4" />
                      <span>CONNECT WALLET</span>
                    </button>
                  );
                }

                if (chain?.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      className="clip-chamfer-btn bg-signalRed text-white font-mono font-bold text-xs sm:text-sm px-4 py-2 transition-all animate-pulse"
                    >
                      WRONG NETWORK
                    </button>
                  );
                }

                const displayAddress = account?.displayName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "CONNECTED");

                return (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={openAccountModal || disconnectWallet}
                      className="clip-chamfer-btn border border-electricYellow bg-[#0a0a0a] hover:bg-electricYellow hover:text-black text-electricYellow font-mono font-bold text-xs sm:text-sm px-3.5 py-1.5 transition-colors flex items-center gap-2"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-signalGreen" />
                      <span>{displayAddress}</span>
                    </button>
                  </div>
                );
              }}
            </ConnectButton.Custom>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-white/15 px-6 py-5 space-y-4 font-mono text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${
                  link.highlight
                    ? "text-electricYellow font-bold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
