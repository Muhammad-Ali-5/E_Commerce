"use client";

import { ShieldCheck, Cpu, ArrowRight, Layers, Zap } from "lucide-react";
import ProductVector from "./ProductVector";
import { Button } from "@/components/button";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono tracking-wide ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                : "bg-zinc-100 border-zinc-300 text-zinc-700"
            }`}
          >
            <Zap className="size-3.5 text-amber-400" /> Vector E-Commerce Showcase Engine
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Next-Gen Tech Hardware <br />
            <span className="text-zinc-500 font-normal">Without Raster Images.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Experience 100% procedural vector graphic product visualizers, real-time cart state, discount calculators, and instant interactive portfolio reviews.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#catalog">
              <Button variant="primary" size="lg" className="rounded-full px-6 text-xs flex items-center gap-2 cursor-pointer">
                <span>Explore Vector Catalog</span>
                <ArrowRight className="size-4" />
              </Button>
            </a>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-400 bg-zinc-900/40">
              <Layers className="size-4 text-zinc-400" /> SVG Rendered
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-800/80 text-xs font-mono">
            <div>
              <span className="block text-lg font-bold text-white">0%</span>
              <span className="text-zinc-500">Image Reliance</span>
            </div>
            <div>
              <span className="block text-lg font-bold text-white">100%</span>
              <span className="text-zinc-500">Client State</span>
            </div>
            <div>
              <span className="block text-lg font-bold text-white">&lt;50ms</span>
              <span className="text-zinc-500">Interaction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Vector Blueprint Card */}
        <div className="lg:col-span-5 relative">
          <div
            className={`p-6 rounded-3xl border shadow-2xl space-y-4 ${
              isDark ? "bg-zinc-900/60 border-zinc-800" : "bg-zinc-50 border-zinc-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                <Cpu className="size-3" /> Flagship Blueprint
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                Active Catalog Item
              </span>
            </div>

            {/* Vector Blueprint SVG Container */}
            <div className="h-64 rounded-2xl bg-zinc-950 p-4 border border-zinc-800/80 flex items-center justify-center relative overflow-hidden">
              <ProductVector type="monitor" className="max-h-full" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-zinc-700">
                Matrix OLED 8K Ultra-Wide
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <div>
                <span className="font-bold block text-sm">Matrix OLED 8K</span>
                <span className="text-zinc-400 font-mono">$1,499 USD</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                <ShieldCheck className="size-3.5 text-emerald-500" /> Vector SVG 1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
