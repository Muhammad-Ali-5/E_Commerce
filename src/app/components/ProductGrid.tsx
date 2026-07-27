"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, Layers, X, ShieldCheck, ShoppingBag } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductVector from "./ProductVector";
import { ProductItem, useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";
import { Button } from "@/components/button";

export const sampleProducts: ProductItem[] = [
  {
    id: "prod_1",
    name: "Matrix OLED 8K Curved Display",
    category: "Displays",
    price: 1499,
    rating: 4.9,
    vectorType: "monitor",
    badge: "Flagship",
    specs: ["240Hz Refresh", "0.03ms Response", "HDR 2000"],
    description: "Architectural OLED ultra-wide monitor with integrated acoustic audio wave visualizer and glassmorphism stand.",
  },
  {
    id: "prod_2",
    name: "Haptic Mechanical Desk Array",
    category: "Peripherals",
    price: 289,
    rating: 4.8,
    vectorType: "keyboard",
    badge: "Hot Swappable",
    specs: ["CNC Aluminum", "Gasket Mount", "Tri-Mode Wireless"],
    description: "Custom mechanical keyboard precision machined with brass weight plate and volume rotary encoder.",
  },
  {
    id: "prod_3",
    name: "Neural Acoustic Spatial Pods",
    category: "Audio & IoT",
    price: 349,
    rating: 4.9,
    vectorType: "headphones",
    badge: "Spatial Audio",
    specs: ["Active ANC 45dB", "50h Battery", "Lossless 96kHz"],
    description: "Planar magnetic studio headphones with active noise cancelling and titanium headband arch.",
  },
  {
    id: "prod_4",
    name: "Quantum Edge AI Accelerator",
    category: "SaaS Modules",
    price: 799,
    rating: 5.0,
    vectorType: "processor",
    badge: "BGA Package",
    specs: ["128 NPU Cores", "64GB LPDDR5X", "PCIe 5.0 x16"],
    description: "Low-latency neural processing unit designed for local LLM execution and computer vision inference.",
  },
  {
    id: "prod_5",
    name: "Cyberware FIDO2 Security Key",
    category: "Audio & IoT",
    price: 89,
    rating: 4.7,
    vectorType: "key",
    badge: "Encrypted",
    specs: ["NFC + USB-C", "Capacitive Touch", "IP68 Waterproof"],
    description: "Hardware security key supporting passwordless WebAuthn authentication with gold-plated touch ring.",
  },
  {
    id: "prod_6",
    name: "Thunderbolt 5 Master Docking Hub",
    category: "Peripherals",
    price: 319,
    rating: 4.8,
    vectorType: "dock",
    badge: "120W PD",
    specs: ["Dual 8K Output", "80Gbps Transfer", "SD 4.0 Reader"],
    description: "Unibody aluminum Thunderbolt hub providing triple display output and high-speed multi-gigabit networking.",
  },
];

interface ProductGridProps {
  searchQuery?: string;
}

export default function ProductGrid({ searchQuery = "" }: ProductGridProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inspectProduct, setInspectProduct] = useState<ProductItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["All", "Displays", "Peripherals", "Audio & IoT", "SaaS Modules"];

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 w-full min-w-0">
      {/* Category Pills & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800 w-full min-w-0">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
            Hardware Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
            <Layers className="size-6 text-zinc-400" /> Vector Products
          </h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full min-w-0 w-full">
          <SlidersHorizontal className="size-4 text-zinc-400 mr-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? isDark
                    ? "bg-white text-black font-bold shadow-sm"
                    : "bg-black text-white font-bold shadow-sm"
                  : isDark
                  ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickInspect={setInspectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-3 glass-panel rounded-3xl p-8 max-w-md mx-auto">
          <h3 className="text-base font-bold">No Products Found</h3>
          <p className="text-xs text-zinc-400">Try selecting another category filter or clearing search.</p>
        </div>
      )}

      {/* Quick Spec Inspection Modal Portal */}
      {inspectProduct && mounted && createPortal(
        <div className="fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0 w-full h-full" onClick={() => setInspectProduct(null)} />

          <div className={`relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border p-6 sm:p-8 space-y-6 ${
            isDark ? "bg-[#09090b] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            <button
              onClick={() => setInspectProduct(null)}
              className={`absolute top-4 right-4 p-2 rounded-full border transition-colors cursor-pointer ${
                isDark
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                  : "bg-zinc-100 border-zinc-300 text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <X className="size-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-2 sm:pt-0">
              <div className="h-56 rounded-2xl bg-zinc-950 p-4 border border-zinc-800 flex items-center justify-center">
                <ProductVector type={inspectProduct.vectorType} />
              </div>

              <div className="space-y-4">
                <div>
                  <span className={`text-[10px] font-mono uppercase block ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    {inspectProduct.category}
                  </span>
                  <h3 className="text-xl font-bold">{inspectProduct.name}</h3>
                  <span className="text-lg font-extrabold font-mono text-emerald-500">${inspectProduct.price} USD</span>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  {inspectProduct.description}
                </p>

                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                    Hardware Specifications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectProduct.specs.map((s, idx) => (
                      <span key={idx} className={`px-2.5 py-1 rounded-full text-[11px] font-mono ${
                        isDark ? "bg-zinc-800 text-zinc-200" : "bg-zinc-100 text-zinc-800 border border-zinc-200"
                      }`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    addToCart(inspectProduct);
                    setInspectProduct(null);
                  }}
                  className="w-full rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="size-4" />
                  <span>Add to Cart (${inspectProduct.price})</span>
                </Button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
