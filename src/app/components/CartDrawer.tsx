"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";
import ProductVector from "./ProductVector";
import { Button } from "@/components/button";

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export default function CartDrawer({ onOpenCheckout }: CartDrawerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    discount,
    promoCode,
    applyPromoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isCartOpen || !mounted) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;

    const success = applyPromoCode(inputCode);
    if (success) {
      setPromoMessage({ text: "Promo code applied successfully!" });
    } else {
      setPromoMessage({ text: "Invalid promo code. Try APEX20 or APEX10.", error: true });
    }
  };

  const grandTotal = subtotal - discount;

  return createPortal(
    <div className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0 w-full h-full" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <div className={`w-full sm:w-screen max-w-md shadow-2xl border-l flex flex-col justify-between animate-in slide-in-from-right duration-300 ${
          isDark ? "bg-[#09090b] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
        }`}>
          {/* Header */}
          <div className={`p-4 sm:p-6 border-b flex items-center justify-between ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          }`}>
            <div className="flex items-center gap-2">
              <ShoppingBag className={`size-5 ${isDark ? "text-zinc-400" : "text-zinc-600"}`} />
              <h2 className="text-lg font-bold">Your Order Cart</h2>
              <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-700 border border-zinc-200"
              }`}>
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isDark ? "hover:bg-zinc-800 text-zinc-400 hover:text-white" : "hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className={`p-4 rounded-2xl border flex gap-4 items-center ${
                    isDark ? "bg-zinc-900/60 border-zinc-800" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  {/* Vector Image */}
                  <div className="size-16 sm:size-20 shrink-0 rounded-xl bg-zinc-950 p-2 border border-zinc-800 flex items-center justify-center">
                    <ProductVector type={item.product.vectorType} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-1 min-w-0">
                    <h4 className="text-xs font-bold truncate">{item.product.name}</h4>
                    <p className={`text-[10px] font-mono ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>${item.product.price} USD</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className={`size-6 rounded-full font-mono text-xs flex items-center justify-center cursor-pointer ${
                          isDark ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
                        }`}
                      >
                        -
                      </button>
                      <span className="text-xs font-mono px-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className={`size-6 rounded-full font-mono text-xs flex items-center justify-center cursor-pointer ${
                          isDark ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-zinc-500 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                    title="Remove item"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className={`size-12 mx-auto ${isDark ? "text-zinc-600" : "text-zinc-400"}`} />
                <h3 className="text-base font-bold">Your Cart is Empty</h3>
                <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>Explore the hardware catalog to add items.</p>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Promo */}
          {cart.length > 0 && (
            <div className={`p-4 sm:p-6 border-t space-y-4 ${
              isDark ? "border-zinc-800" : "border-zinc-200"
            }`}>
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Promo Code (APEX20)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-full outline-none border ${
                        isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"
                      }`}
                    />
                  </div>
                  <Button variant="secondary" size="sm" type="submit" className="rounded-full text-xs px-3 cursor-pointer shrink-0">
                    Apply
                  </Button>
                </div>
                {promoMessage && (
                  <p className={`text-[10px] ${promoMessage.error ? "text-red-400" : "text-emerald-500"}`}>
                    {promoMessage.text}
                  </p>
                )}
              </form>

              {/* Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className={`flex items-center justify-between ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  <span>Subtotal</span>
                  <span className={`font-mono font-semibold ${isDark ? "text-white" : "text-zinc-900"}`}>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between text-emerald-500 font-semibold">
                    <span>Discount ({promoCode})</span>
                    <span className="font-mono">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className={`flex items-center justify-between font-bold text-sm pt-2 border-t ${
                  isDark ? "text-white border-zinc-800" : "text-zinc-900 border-zinc-200"
                }`}>
                  <span>Grand Total</span>
                  <span className="font-mono">${grandTotal.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setIsCartOpen(false);
                  onOpenCheckout();
                }}
                className="w-full rounded-full py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="size-4" />
              </Button>

              <div className={`flex items-center justify-center gap-1.5 text-[10px] font-mono ${
                isDark ? "text-zinc-500" : "text-zinc-600"
              }`}>
                <ShieldCheck className="size-3 text-emerald-500" /> End-to-End Encrypted Checkout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
