"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseRoadmapScrollProps {
  sectionRef: React.RefObject<HTMLElement>;
  lineRef: React.RefObject<HTMLElement>;
  cardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  chapterCount: number;
  walkerRef: React.RefObject<HTMLElement>;
  trailRef: React.RefObject<HTMLElement>;
}

export function useRoadmapScroll({
  sectionRef,
  lineRef,
  cardRefs,
  chapterCount,
  walkerRef,
  trailRef,
}: UseRoadmapScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [walkDirection, setWalkDirection] = useState<"down" | "up">("down");
  const [nodeTops, setNodeTops] = useState<number[]>([]);
  const [lineLength, setLineLength] = useState(1000);

  const activeIndexRef = useRef(0);
  const isWalkingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const lineLengthRef = useRef(1000);
  const nodeTopsRef = useRef<number[]>([]);
  const isIntersectingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  // Measure card nodes relative to line container
  const measureNodes = useCallback(() => {
    if (!lineRef.current) return;
    const lineRect = lineRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const lineAbsoluteTop = lineRect.top + scrollTop;
    const measuredLength = lineRef.current.offsetHeight;

    setLineLength(measuredLength);
    lineLengthRef.current = measuredLength;

    const tops: number[] = [];
    cardRefs.current.forEach((cardEl, idx) => {
      if (cardEl) {
        const cardRect = cardEl.getBoundingClientRect();
        const cardAbsoluteTop = cardRect.top + scrollTop;
        // Node aligns near top-third of the card
        const relativeTop = Math.max(0, Math.min(measuredLength, cardAbsoluteTop - lineAbsoluteTop + 36));
        tops.push(relativeTop);
      } else {
        // Fallback proportional spacing
        tops.push((measuredLength / Math.max(1, chapterCount - 1)) * idx);
      }
    });

    nodeTopsRef.current = tops;
    setNodeTops(tops);
  }, [cardRefs, chapterCount, lineRef]);

  // Main animation frame loop
  const updateLoop = useCallback(() => {
    if (!isIntersectingRef.current && !prefersReducedMotionRef.current) {
      rafIdRef.current = null;
      return;
    }

    const targetY = targetYRef.current;
    const prevY = currentYRef.current;
    const lerp = prefersReducedMotionRef.current ? 1 : 0.16;
    const nextY = prevY + (targetY - prevY) * lerp;
    currentYRef.current = nextY;

    // Apply transform directly to refs (no setState per frame)
    if (walkerRef.current) {
      walkerRef.current.style.transform = `translate3d(-50%, ${nextY}px, 0)`;
    }
    if (trailRef.current && lineLengthRef.current > 0) {
      const progress = Math.min(1, Math.max(0, nextY / lineLengthRef.current));
      trailRef.current.style.transform = `scaleY(${progress})`;
    }

    // Determine nearest active chapter node
    const tops = nodeTopsRef.current;
    if (tops.length > 0) {
      let nearestIdx = 0;
      let minDiff = Infinity;
      for (let i = 0; i < tops.length; i++) {
        const diff = Math.abs(nextY - tops[i]);
        if (diff < minDiff) {
          minDiff = diff;
          nearestIdx = i;
        }
      }

      if (nearestIdx !== activeIndexRef.current) {
        activeIndexRef.current = nearestIdx;
        setActiveIndex(nearestIdx);
      }
    }

    // Continue loop while section is visible
    if (isIntersectingRef.current) {
      rafIdRef.current = requestAnimationFrame(updateLoop);
    } else {
      rafIdRef.current = null;
    }
  }, [trailRef, walkerRef]);

  // Scroll listener computes targetY
  const handleScroll = useCallback(() => {
    if (!lineRef.current) return;
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    const direction = currentScrollY >= lastScrollYRef.current ? "down" : "up";
    lastScrollYRef.current = currentScrollY;

    if (!prefersReducedMotionRef.current) {
      setWalkDirection(direction);
      setIsWalking(true);

      if (isWalkingTimerRef.current) {
        clearTimeout(isWalkingTimerRef.current);
      }
      isWalkingTimerRef.current = setTimeout(() => {
        setIsWalking(false);
      }, 160);
    }

    // Reference line at 40% of viewport
    const refLineY = window.innerHeight * 0.4;
    const lineRect = lineRef.current.getBoundingClientRect();
    const rawTarget = refLineY - lineRect.top;

    // The walker stops at the ghost node if a flexible chapter exists
    const maxStopY =
      nodeTopsRef.current.length > 0
        ? nodeTopsRef.current[nodeTopsRef.current.length - 1]
        : lineLengthRef.current;

    const clampedTarget = Math.max(0, Math.min(maxStopY, rawTarget));
    targetYRef.current = clampedTarget;

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(updateLoop);
    }
  }, [lineRef, updateLoop]);

  // Scroll smoothly to a specific chapter
  const scrollToChapter = useCallback((index: number) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;
    const headerOffset = 96;
    const elementPosition = cardEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, [cardRefs]);

  // Setup observers and listeners
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = mq.matches;

    measureNodes();

    // Resize observer
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && sectionRef.current) {
      ro = new ResizeObserver(() => {
        measureNodes();
        handleScroll();
      });
      ro.observe(sectionRef.current);
    }

    // Intersection observer
    let io: IntersectionObserver | null = null;
    if (sectionRef.current) {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isIntersectingRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            handleScroll();
            if (!rafIdRef.current) {
              rafIdRef.current = requestAnimationFrame(updateLoop);
            }
          }
        },
        { threshold: 0.05 }
      );
      io.observe(sectionRef.current);
    }

    // Initial positioning without delay
    handleScroll();
    // Fast initial snap
    currentYRef.current = targetYRef.current;
    if (walkerRef.current) {
      walkerRef.current.style.transform = `translate3d(-50%, ${targetYRef.current}px, 0)`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureNodes, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureNodes);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (isWalkingTimerRef.current) clearTimeout(isWalkingTimerRef.current);
    };
  }, [handleScroll, measureNodes, sectionRef, updateLoop, walkerRef]);

  return {
    activeIndex,
    isWalking,
    walkDirection,
    nodeTops,
    lineLength,
    scrollToChapter,
  };
}
