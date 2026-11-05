import React from "react";
import Link from "next/link";
import { FilePhoto } from "./FilePhoto";
import { Reveal } from "./Reveal";
import { TribeExplorer } from "./TribeExplorer";
import {
  FILE_01,
  FILE_02,
  FILE_03,
  FILE_04,
  FILE_05,
} from "@/data/field-guide";

export function FieldGuide() {
  return (
    <section id="field-guide" className="scroll-mt-24 w-full bg-black py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SECTION HEADER STRIP */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-4">
            <span className="text-electricYellow tracking-widest uppercase font-bold">
              [SEC_02 // FIELD GUIDE]
            </span>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="px-2 py-0.5 border border-white/20 text-[10px] uppercase">
                COLLABS: NOT YET OPEN
              </span>
              <span className="px-2 py-0.5 border border-signalGreen/40 text-signalGreen text-[10px] uppercase">
                FULLY HAND-DRAWN ON ROBINHOOD
              </span>
            </div>
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            They <span className="text-electricYellow">ARRIVED</span>. NOBODY KNOWS From Where.
          </h2>

          {/* Status Progress Bar (50%) */}
          <div className="mt-6 flex items-center gap-4">
            <span className="font-mono text-xs text-neutral-400">DOSSIER CLEARANCE: 50%</span>
            <div className="flex-1 h-1.5 bg-neutral-900 border border-white/10 overflow-hidden">
              <div className="h-full bg-electricYellow w-1/2" />
            </div>
          </div>
        </div>

        {/* ── FILE 01: THE SUBJECT ── */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080808] border border-white/10 p-6 sm:p-10 clip-card-notch">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
                <span className="w-2 h-2 bg-electricYellow" />
                <span>{FILE_01.label}</span>
                <span className="text-neutral-500">{"//"}</span>
                <span className="text-white uppercase">{FILE_01.title}</span>
              </div>

              <div className="space-y-4 font-body text-neutral-300 text-base sm:text-lg leading-relaxed">
                {FILE_01.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <span className="font-headline font-bold text-2xl sm:text-3xl text-electricYellow block uppercase">
                  &ldquo;{FILE_01.pullQuote}&rdquo;
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center py-4">
              <FilePhoto
                image="/entities/entity-grey-selfie.webp"
                alt="Entity grey selfie in oversized tee"
                caption="SPECIMEN 001 // BLACK & WHITE OBSERVATION"
              />
            </div>
          </div>
        </Reveal>

        {/* ── FILE 02: ORIGIN SEQUENCE ── */}
        <Reveal>
          <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 clip-card-notch space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
              <span className="w-2 h-2 bg-electricYellow" />
              <span>{FILE_02.label}</span>
              <span className="text-neutral-500">{"//"}</span>
              <span className="text-white uppercase">{FILE_02.title}</span>
            </div>

            <p className="font-body text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {FILE_02.intro}
            </p>

            {/* 3-Beat Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
              {FILE_02.timeline.map((item, idx) => (
                <div
                  key={item.step}
                  className="p-5 bg-black/60 border border-white/10 flex flex-col justify-between space-y-4 relative"
                >
                  <span className="text-electricYellow font-bold text-xl">
                    SEQUENCE // {item.step}
                  </span>
                  <p className="font-headline font-bold text-lg text-white uppercase">
                    {item.event}
                  </p>
                  {idx < 2 && (
                    <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-neutral-500 font-bold z-10">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="font-mono text-xs text-neutral-400 italic">
              {FILE_02.closing}
            </p>
          </div>
        </Reveal>

        {/* ── FILE 03: TRIBE TAXONOMY ── */}
        <Reveal>
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
              <span className="w-2 h-2 bg-electricYellow" />
              <span>{FILE_03.label}</span>
              <span className="text-neutral-500">{"//"}</span>
              <span className="text-white uppercase">{FILE_03.title}</span>
            </div>

            <p className="font-body text-neutral-300 text-base max-w-2xl">
              {FILE_03.intro}
            </p>

            <TribeExplorer />
          </div>
        </Reveal>

        {/* ── FILE 04: ACQUISITION PROTOCOL ── */}
        <Reveal>
          <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 clip-card-notch space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
              <span className="w-2 h-2 bg-electricYellow" />
              <span>{FILE_04.label}</span>
              <span className="text-neutral-500">{"//"}</span>
              <span className="text-white uppercase">{FILE_04.title}</span>
            </div>

            <p className="font-body text-neutral-300 text-base max-w-2xl">
              {FILE_04.intro}
            </p>

            {/* 4 Phases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
              {FILE_04.phases.map((ph) => (
                <div key={ph.tag} className="p-4 bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-electricYellow font-bold">{ph.tag}</span>
                    <span className="text-[10px] text-neutral-400 border border-white/10 px-1.5 py-0.5">
                      {ph.slots}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300">{ph.rule}</p>
                </div>
              ))}
            </div>

            {/* WL Distribution */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
                {FILE_04.wlTitle}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                {FILE_04.wlSlots.map((slot) => (
                  <div
                    key={slot}
                    className="p-3 bg-white/[0.02] border border-white/10 text-neutral-300 text-center font-bold"
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <span className="text-signalGreen font-bold">{FILE_04.statusLine}</span>
              <span className="text-neutral-400">
                {FILE_04.footnote}{" "}
                <Link href={FILE_04.footnoteLink.href} className="text-electricYellow underline hover:text-white">
                  {FILE_04.footnoteLink.label}
                </Link>
                .
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── FILE 05: THE FITTING ROOM ── */}
        <Reveal>
          <div className="bg-[#080808] border border-white/10 p-6 sm:p-10 clip-card-notch space-y-8">
            <div className="flex items-center gap-2 font-mono text-xs text-electricYellow font-bold">
              <span className="w-2 h-2 bg-electricYellow" />
              <span>{FILE_05.label}</span>
              <span className="text-neutral-500">{"//"}</span>
              <span className="text-white uppercase">{FILE_05.title}</span>
            </div>

            <p className="font-headline font-bold text-xl sm:text-2xl text-white uppercase">
              {FILE_05.intro}
            </p>

            {/* 4 Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
              {FILE_05.features.map((feat) => (
                <div key={feat.title} className="p-4 bg-black/60 border border-white/10 space-y-2">
                  <span className="text-[10px] text-electricYellow border border-electricYellow/40 px-1.5 py-0.5 inline-block">
                    [{feat.icon}]
                  </span>
                  <h4 className="font-headline font-bold text-white text-base uppercase">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-body">
                    {feat.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-6 bg-black border-l-2 border-electricYellow space-y-3">
              <p className="font-headline font-bold text-xl sm:text-2xl text-electricYellow uppercase">
                {FILE_05.bigQuote}
              </p>
              <p className="font-mono text-xs text-neutral-400">
                {FILE_05.privacyLine} &bull; {FILE_05.accessLine}{" "}
                <Link href={FILE_05.accessLink.href} className="text-electricYellow underline hover:text-white">
                  {FILE_05.accessLink.label}
                </Link>
                .
              </p>
            </div>

            {/* Tags Strip */}
            <div className="flex flex-wrap gap-2 pt-2">
              {FILE_05.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[11px] text-neutral-300 uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="font-mono text-xs text-neutral-400 italic pt-2">
              {FILE_05.closingLine}
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
