"use client";

import React, { useEffect, useRef } from "react";

interface ScanlineGlitchScannerProps {
  containerRef: React.RefObject<HTMLElement>;
}

export function ScanlineGlitchScanner({ containerRef }: ScanlineGlitchScannerProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    let animId: number;
    let startTime: number | null = null;
    const cycleDuration = 6500; // 6.5 seconds per full top-to-bottom sweep

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % cycleDuration;
      const progress = elapsed / cycleDuration; // 0.0 to 1.0

      const containerRect = container.getBoundingClientRect();
      const currentY = progress * containerRect.height;

      // Update scanline position
      line.style.top = `${currentY}px`;
      line.style.opacity = progress > 0.015 && progress < 0.985 ? "1" : "0";

      // Collision detection: query all glitch targets and text elements
      const targets = container.querySelectorAll<HTMLElement>(
        "[data-glitch-target], h1, h2, h3, p, [data-glitch-card]"
      );

      // 1. READ PHASE (batch getBoundingClientRect to avoid layout thrashing)
      const hits: { el: HTMLElement; targetType: string | null; isHit: boolean }[] = [];
      targets.forEach((target) => {
        const targetRect = target.getBoundingClientRect();
        const targetTop = targetRect.top - containerRect.top;
        const targetBottom = targetRect.bottom - containerRect.top;

        // Active collision zone: triggers glitch as line touches and glides through
        const isHit = currentY >= targetTop - 18 && currentY <= targetBottom + 18;
        const targetType = target.getAttribute("data-glitch-target");

        hits.push({ el: target, targetType, isHit });
      });

      // 2. WRITE PHASE (batch DOM class mutation for silky 60fps)
      hits.forEach(({ el, targetType, isHit }) => {
        if (isHit) {
          if (targetType === "title" || el.tagName === "H1") {
            el.classList.add("active-scan-glitch-title");
          } else if (targetType === "card" || el.hasAttribute("data-glitch-card")) {
            el.classList.add("active-scan-glitch-card");
          } else {
            el.classList.add("active-scan-glitch");
          }
        } else {
          el.classList.remove(
            "active-scan-glitch-title",
            "active-scan-glitch-card",
            "active-scan-glitch"
          );
        }
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (container) {
        const targets = container.querySelectorAll<HTMLElement>(
          "[data-glitch-target], h1, h2, h3, p, [data-glitch-card]"
        );
        targets.forEach((t) =>
          t.classList.remove(
            "active-scan-glitch-title",
            "active-scan-glitch-card",
            "active-scan-glitch"
          )
        );
      }
    };
  }, [containerRef]);

  return (
    <div
      ref={lineRef}
      className="scan-beam-laser flex items-center justify-between px-3 pointer-events-none"
    >
      <span className="font-mono text-[9px] text-[#00f0ff] font-bold tracking-widest uppercase opacity-80 select-none hidden sm:inline">
        ▶ SCAN // BEAM
      </span>
      <span className="font-mono text-[9px] text-electricYellow font-bold tracking-widest uppercase opacity-80 select-none hidden sm:inline">
        [COLLISION_DETECTOR] ◀
      </span>
    </div>
  );
}
