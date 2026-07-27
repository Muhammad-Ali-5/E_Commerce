"use client";

import { Cpu, Github, Globe, ShieldCheck } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 mt-16 ${
      isDark ? "bg-[#09090b] border-zinc-800 text-zinc-400" : "bg-zinc-50 border-zinc-200 text-zinc-600"
    }`}>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b ${
          isDark ? "border-zinc-800/80" : "border-zinc-200"
        }`}>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`size-6 rounded-full p-0.5 flex items-center justify-center ${isDark ? "bg-white" : "bg-black"}`}>
                <div className={`size-full rounded-full flex items-center justify-center overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
                  <img src="/favicon-32x32.png" alt="Apex Logo" className="size-3.5 object-contain" />
                </div>
              </div>
              <span className={`text-base font-extrabold tracking-tight ${isDark ? "text-white" : "text-zinc-900"}`}>
                Apex.suite
              </span>
            </div>
            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
              High-performance vector e-commerce storefront showcase. Built with Next.js 14, Tailwind CSS, Lucide icons, and vector graphics.
            </p>
          </div>

          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono ${
            isDark ? "border-zinc-800 text-emerald-400 bg-zinc-900/60" : "border-emerald-300 text-emerald-700 bg-emerald-50"
          }`}>
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Portfolio Showcase Active</span>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? "text-zinc-400" : "text-zinc-600"
        }`}>
          <p>© 2026 Apex Commerce Suite. Interactive Developer Portfolio Showcase.</p>
          <div className={`flex items-center gap-4 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            <span className="flex items-center gap-1"><ShieldCheck className="size-3.5 text-emerald-500" /> Vector SVG 1.0</span>
            <span className="flex items-center gap-1"><Globe className={`size-3.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`} /> Next.js 14 App Router</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
