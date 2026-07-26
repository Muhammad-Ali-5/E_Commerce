"use client";

import { useState } from "react";
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock } from "lucide-react";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";
import { Button } from "@/components/button";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { cart, subtotal, discount, clearCart } = useCart();
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const grandTotal = subtotal - discount;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative z-10 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border p-6 sm:p-8 space-y-6 ${
        isDark ? "bg-[#09090b] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800"
        >
          <X className="size-5" />
        </button>

        {completed ? (
          <div className="py-10 text-center space-y-4 animate-in zoom-in-95">
            <CheckCircle2 className="size-16 mx-auto text-emerald-500" />
            <h2 className="text-2xl font-extrabold">Order Placed Successfully!</h2>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Simulated portfolio transaction completed. Order ID: <span className="font-mono text-white">#APEX-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={onClose}
              className="mt-4 rounded-full px-6 text-xs"
            >
              Return to Storefront
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="space-y-5">
            {/* Header */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Portfolio Showcase Checkout
              </span>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Lock className="size-5 text-zinc-400" /> Secure Order Checkout
              </h2>
            </div>

            {/* Order Items Preview */}
            <div className={`p-4 rounded-2xl border space-y-2 text-xs ${
              isDark ? "bg-zinc-900/60 border-zinc-800" : "bg-zinc-50 border-zinc-200"
            }`}>
              <div className="font-semibold text-zinc-300 flex justify-between border-b border-zinc-800 pb-2">
                <span>Items ({cart.length})</span>
                <span>Total: ${grandTotal.toFixed(2)} USD</span>
              </div>
              <div className="max-h-24 overflow-y-auto space-y-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-zinc-400">
                    <span className="truncate max-w-[200px]">{item.product.name} x{item.quantity}</span>
                    <span className="font-mono text-white">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Form Inputs */}
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Alex Mercer"
                    className={`w-full px-3.5 py-2 rounded-full outline-none border ${
                      isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    defaultValue="alex.mercer@portfolio.dev"
                    className={`w-full px-3.5 py-2 rounded-full outline-none border ${
                      isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 mb-1">Simulated Card Details</label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    defaultValue="•••• •••• •••• 4242"
                    className={`w-full pl-10 pr-3.5 py-2 rounded-full outline-none border ${
                      isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-zinc-100 border-zinc-300 text-zinc-900"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-full rounded-full py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="size-4" />
              <span>Complete Simulated Order (${grandTotal.toFixed(2)})</span>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
