"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Eye, ShieldCheck, FileText } from "lucide-react";

export function MobileBottomDock() {
  const pathname = usePathname();

  const tabs = [
    { href: "/mint", label: "MINT", icon: Zap, highlight: true },
    { href: "/#sneak-peeks", label: "DROPS", icon: Eye },
    { href: "/allowlist", label: "ALLOWLIST", icon: ShieldCheck },
    { href: "/about", label: "ABOUT", icon: FileText },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-black/95 backdrop-blur-md border-t border-white/10 py-2 px-4 flex justify-around items-center">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center justify-center py-1 px-3 transition-transform active:scale-90 font-mono text-[10px] tracking-wider uppercase ${
              tab.highlight || isActive
                ? "text-electricYellow font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${tab.highlight ? "animate-pulse" : ""}`} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
