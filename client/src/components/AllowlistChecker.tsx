"use client";

import React, { useState } from "react";
import { useWeb3 } from "@/lib/web3-context";
import { ShieldCheck, CheckSquare, Square, RefreshCw, CheckCircle, AlertTriangle, XCircle, ExternalLink } from "lucide-react";

export function AllowlistChecker() {
  const {
    checkAddress,
    setCheckAddress,
    checkStatus,
    runEligibilityCheck,
    tasks,
    toggleTask,
  } = useWeb3();

  const [inputVal, setInputVal] = useState(checkAddress);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckAddress(inputVal);
    runEligibilityCheck(inputVal);
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <section id="allowlist" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-electricYellow tracking-widest uppercase mb-2">
            <span className="w-2 h-2 bg-electricYellow inline-block" />
            <span>{"[SEC_05 // PROOF-OF-CLEARANCE]"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-white">
            Allowlist & Eligibility
          </h2>
        </div>
        <p className="font-body text-sm text-neutral-400 max-w-md">
          Verify your cryptographic inclusion in the Phase 1 (GTD) or Phase 2 (FCFS) Merkle trees for Robinhood Chain mint vouchers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Community Task Checklist (6 Cols) */}
        <div className="lg:col-span-6 bg-[#080808] border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-electricYellow" />
              <h3 className="font-headline font-bold text-lg uppercase text-white">
                Task Checklist
              </h3>
            </div>
            <span className="font-mono text-xs px-2.5 py-1 bg-[#0d0d0d] border border-white/10 text-electricYellow font-bold">
              {completedCount} OF {tasks.length} COMPLETE
            </span>
          </div>

          <p className="font-mono text-xs text-neutral-400">
            Complete the surveillance directives below to promote your wallet entry to GTD or FCFS tier status:
          </p>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer p-4 border transition-all flex items-start gap-3.5 select-none ${
                  task.completed
                    ? "bg-[#0d0d0d]/80 border-signalGreen/40 hover:border-signalGreen"
                    : "bg-black border-white/10 hover:border-white/30"
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 text-signalGreen shrink-0"
                  aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
                >
                  {task.completed ? (
                    <CheckSquare className="w-5 h-5 text-signalGreen" />
                  ) : (
                    <Square className="w-5 h-5 text-neutral-500" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold uppercase ${
                        task.completed ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {task.label}
                    </span>
                    {task.completed && (
                      <span className="font-mono text-[10px] text-signalGreen">VERIFIED</span>
                    )}
                  </div>
                  <p className="font-mono text-[11px] text-neutral-400 mt-0.5">{task.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-black border border-white/5 font-mono text-[11px] text-neutral-400">
            Directive: Once all tasks are checked, query your wallet address on the right to confirm status tier.
          </div>
        </div>

        {/* Right Column: Merkle Tree Eligibility Checker (6 Cols) */}
        <div className="lg:col-span-6 bg-[#080808] border border-electricYellow/60 p-6 sm:p-8 space-y-6 shadow-[0_0_25px_rgba(252,238,84,0.1)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="font-headline font-bold text-lg uppercase text-white">
              Eligibility Terminal
            </h3>
            <span className="font-mono text-xs text-signalGreen">TREE ROOT: 0x8F9C...</span>
          </div>

          <p className="font-mono text-xs text-neutral-300">
            Enter your EVM wallet address to verify Phase 1 Guaranteed or Phase 2 Waitlist allocation:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="wallet-checker-input" className="block font-mono text-xs text-neutral-400 mb-1.5 uppercase">
                Robinhood EVM Address / ENS:
              </label>
              <input
                id="wallet-checker-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="0x7E49... or robinhood.eth"
                className="w-full bg-black border border-white/20 focus:border-electricYellow px-4 py-3 text-sm font-mono text-electricYellow placeholder:text-neutral-600 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={checkStatus === "CHECKING"}
              className="w-full clip-chamfer-btn bg-electricYellow hover:bg-white text-black font-headline font-bold text-sm py-3.5 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {checkStatus === "CHECKING" ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>TRAVERSING MERKLE LEAF NODES...</span>
                </>
              ) : (
                <span>QUERY MERKLE ELIGIBILITY</span>
              )}
            </button>
          </form>

          {/* Quick Mock Testers for Easy Localhost Verification */}
          <div className="pt-2">
            <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1.5">
              Quick Test Simulation Addresses:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  const addr = "0x7E49c63Da81C92BFb1E4488A01A06b83E58F882e";
                  setInputVal(addr);
                  setCheckAddress(addr);
                  runEligibilityCheck(addr);
                }}
                className="px-2.5 py-1 bg-black border border-white/10 hover:border-signalGreen text-signalGreen font-mono text-[10px] uppercase"
              >
                [Test GTD Wallet]
              </button>
              <button
                type="button"
                onClick={() => {
                  const addr = "0x3B88c22Fa91C92BFb1E4488A01A06b83E58F8820";
                  setInputVal(addr);
                  setCheckAddress(addr);
                  runEligibilityCheck(addr);
                }}
                className="px-2.5 py-1 bg-black border border-white/10 hover:border-electricYellow text-electricYellow font-mono text-[10px] uppercase"
              >
                [Test FCFS Wallet]
              </button>
              <button
                type="button"
                onClick={() => {
                  const addr = "0x9999999999999999999999999999999999999999";
                  setInputVal(addr);
                  setCheckAddress(addr);
                  runEligibilityCheck(addr);
                }}
                className="px-2.5 py-1 bg-black border border-white/10 hover:border-signalRed text-signalRed font-mono text-[10px] uppercase"
              >
                [Test Ineligible Wallet]
              </button>
            </div>
          </div>

          {/* Status Result Box */}
          <div className="p-4 bg-black border border-white/10 font-mono text-xs">
            {checkStatus === "IDLE" && (
              <div className="flex items-center justify-between text-neutral-400">
                <span>STATUS:</span>
                <span className="text-white font-bold">READY TO QUERY</span>
              </div>
            )}

            {checkStatus === "CHECKING" && (
              <div className="flex items-center gap-2 text-electricYellow animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>CRYPTOGRAPHIC HASH PROOF COMPUTING...</span>
              </div>
            )}

            {checkStatus === "ELIGIBLE_GTD" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-signalGreen font-bold text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{"STATUS: ELIGIBLE // PHASE 01 GUARANTEED (GTD)"}</span>
                </div>
                <p className="text-neutral-300 text-[11px]">
                  ✓ Verified: You are allocated 1 guaranteed mint token in Phase 1 with signed EIP-712 voucher.
                </p>
              </div>
            )}

            {checkStatus === "ELIGIBLE_FCFS" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-electricYellow font-bold text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{"STATUS: ELIGIBLE // PHASE 02 WAITLIST (FCFS)"}</span>
                </div>
                <p className="text-neutral-300 text-[11px]">
                  ✓ Verified: You have access to Phase 2 First-Come-First-Served allocation (1 token max).
                </p>
              </div>
            )}

            {checkStatus === "NOT_ELIGIBLE" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-signalRed font-bold text-sm">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>STATUS: NOT FOUND IN CURRENT ALLOWLIST</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  This wallet has not been registered or tasks remain unverified. You can still participate in the Public Phase (Phase 3).
                </p>
              </div>
            )}

            {checkStatus === "ERROR" && (
              <div className="flex items-center gap-2 text-signalRed">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>ERROR: Please provide a valid Ethereum / Robinhood address.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
