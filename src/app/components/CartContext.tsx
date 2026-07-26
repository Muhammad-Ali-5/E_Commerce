"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface ProductItem {
  id: string;
  name: string;
  category: "Displays" | "Peripherals" | "Audio & IoT" | "SaaS Modules";
  price: number;
  rating: number;
  specs: string[];
  vectorType: "monitor" | "keyboard" | "headphones" | "processor" | "key" | "dock";
  badge?: string;
  description: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedColor?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  subtotal: number;
  discount: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  totalItems: number;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  subtotal: 0,
  discount: 0,
  promoCode: "",
  applyPromoCode: () => false,
  totalItems: 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("apex_cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("apex_cart", JSON.stringify(newCart));
  };

  const addToCart = (product: ProductItem, color = "Monochrome Slate") => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [...prev, { product, quantity: 1, selectedColor: color }];
      }
      saveCart(updated);
      return updated;
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    const updated = cart.filter((item) => item.product.id !== productId);
    saveCart(updated);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updated = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "PORTFOLIO20" || clean === "APEX20") {
      setDiscountPercent(0.2);
      setPromoCode(clean);
      return true;
    } else if (clean === "APEX10") {
      setDiscountPercent(0.1);
      setPromoCode(clean);
      return true;
    }
    return false;
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = subtotal * discountPercent;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        discount,
        promoCode,
        applyPromoCode,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
