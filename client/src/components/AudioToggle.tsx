"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Cyber ambient drone (low sub-bass drone with harmonic overtone)
        osc.type = "sine";
        osc.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio API error", e);
        setIsPlaying(true);
      }
    } else {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`group flex items-center gap-2.5 px-3 py-1.5 border border-white/10 hover:border-electricYellow/60 bg-black/70 backdrop-blur-sm transition-all text-[11px] font-mono uppercase ${
        isPlaying ? "text-electricYellow border-electricYellow/40" : "text-neutral-400 hover:text-white"
      }`}
      aria-label="Toggle ambient cyber audio"
    >
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isPlaying ? "bg-electricYellow animate-ping" : "bg-neutral-500 group-hover:bg-electricYellow"
        }`}
      />
      {isPlaying ? <Volume2 className="w-3 h-3 text-electricYellow" /> : <VolumeX className="w-3 h-3" />}
      <span>{isPlaying ? "AUDIO: TRANSMITTING" : "AUDIO: MUTED"}</span>
    </button>
  );
}
