"use client";

import { useState } from "react";
import { Search, ShoppingBag, Cpu, Sun, Moon, Menu, X } from "lucide-react";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = "", onSearchChange }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 py-3 px-4 sm:px-6 lg:px-8 border-b transition-colors ${
        isDark
          ? "bg-[#09090b]/90 border-zinc-800 text-white backdrop-blur-xl"
          : "bg-white/90 border-zinc-200 text-zinc-900 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Emblem */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div
            className={`size-9 rounded-full p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center ${
              isDark ? "bg-white" : "bg-black"
            }`}
          >
            <div
              className={`size-full rounded-full flex items-center justify-center overflow-hidden ${
                isDark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <img src="/favicon-32x32.png" alt="Apex Logo" className="size-5 object-contain" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight flex items-center gap-1">
              Apex<span className={`font-normal ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>.suite</span>
            </span>
            <span className={`text-[9px] font-mono block -mt-1 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
              Vector Commerce Engine
            </span>
          </div>
        </a>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 size-4 ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search hardware by spec, category, or model..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-xs rounded-full outline-none transition-all ${
                isDark
                  ? "bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:border-zinc-500"
                  : "bg-zinc-100 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500"
              }`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isDark
                ? "bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800"
                : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              isDark
                ? "bg-white text-black hover:bg-zinc-200 shadow-sm"
                : "bg-black text-white hover:bg-zinc-800 shadow-sm"
            }`}
          >
            <ShoppingBag className="size-4" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="ml-0.5 px-2 py-0.5 rounded-full bg-zinc-900 text-white font-mono text-[10px]">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full border ${
              isDark ? "bg-zinc-900 border-zinc-800 text-zinc-300" : "bg-zinc-100 border-zinc-300 text-zinc-700"
            }`}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 mt-3 border-t border-zinc-800 flex flex-col gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search product specs..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-xs rounded-full outline-none ${
                isDark
                  ? "bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500"
                  : "bg-zinc-100 border border-zinc-300 text-zinc-900 placeholder-zinc-400"
              }`}
            />
          </div>
        </div>
      )}
    </header>
  );
}
