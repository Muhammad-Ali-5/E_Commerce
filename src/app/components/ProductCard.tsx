"use client";

import { useState } from "react";
import { Plus, Check, Star, Eye } from "lucide-react";
import ProductVector from "./ProductVector";
import { ProductItem, useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";
import { Button } from "@/components/button";

interface ProductCardProps {
  product: ProductItem;
  onQuickInspect: (product: ProductItem) => void;
}

export default function ProductCard({ product, onQuickInspect }: ProductCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className={`group relative rounded-3xl p-4 border transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? "bg-zinc-900/60 border-zinc-800 hover:border-zinc-500"
          : "bg-zinc-50 border-zinc-200 hover:border-zinc-400 shadow-sm"
      }`}
    >
      {/* Top Vector Graphics Container */}
      <div className="relative aspect-[4/3] rounded-2xl bg-zinc-950 p-4 border border-zinc-800 flex items-center justify-center overflow-hidden mb-4">
        <ProductVector type={product.vectorType} className="max-w-full max-h-full group-hover:scale-105 transition-transform duration-500" />
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-zinc-700">
            {product.badge}
          </span>
        )}

        {/* Quick View Trigger */}
        <button
          onClick={() => onQuickInspect(product)}
          className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-black/80 text-zinc-300 hover:text-white backdrop-blur-md border border-zinc-700 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          title="Quick Spec Inspection"
        >
          <Eye className="size-3.5" />
        </button>
      </div>

      {/* Info Body */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400">
              <Star className="size-3 fill-amber-400 text-amber-400" /> {product.rating}
            </div>
          </div>

          <h3 className="text-sm font-bold truncate">{product.name}</h3>
          <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specs Pills */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 text-[10px] font-mono border border-zinc-700/60">
              {spec}
            </span>
          ))}
        </div>

        {/* Bottom Price & Add CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <div>
            <span className="text-xs font-mono text-zinc-400 block -mb-0.5">Price</span>
            <span className="text-sm font-extrabold font-mono">${product.price} USD</span>
          </div>

          <Button
            variant={added ? "primary" : "secondary"}
            size="sm"
            onClick={handleAddToCart}
            className="rounded-full px-3.5 py-1.5 text-xs flex items-center gap-1 cursor-pointer"
          >
            {added ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}
            <span>{added ? "Added" : "Add to Cart"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
