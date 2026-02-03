import React, { createContext, useContext, useState, useCallback } from "react";
import { Product, CartItem } from "../types";

// ─── context shape ──────────────────────────────────────────────────────────

export interface CartCtxType {
  items: CartItem[];
  add: (p: Product) => void;
  inc: (id: number) => void;
  dec: (id: number) => void;
  clear: () => void;
  qty: number;     // total item count across all lines
  total: number;   // total price (sum of price × qty)
}

const CartCtx = createContext<CartCtxType>({
  items: [],
  add: () => {},
  inc: () => {},
  dec: () => {},
  clear: () => {},
  qty: 0,
  total: 0,
});

// ─── provider ───────────────────────────────────────────────────────────────

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  /* add one unit (creates line if absent) */
  const add = useCallback((p: Product) => {
    setItems((prev: CartItem[]) => {
      const exists = prev.find((i: CartItem) => i.id === p.id);
      return exists
        ? prev.map((i: CartItem) =>
            i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...p, quantity: 1 }];
    });
  }, []);

  /* +1 on an existing line */
  const inc = useCallback((id: number) => {
    setItems((prev: CartItem[]) =>
      prev.map((i: CartItem) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }, []);

  /* −1; removes the line entirely when qty reaches 0 */
  const dec = useCallback((id: number) => {
    setItems((prev: CartItem[]) => {
      const target = prev.find((i: CartItem) => i.id === id);
      if (target && target.quantity <= 1) return prev.filter((i: CartItem) => i.id !== id);
      return prev.map((i: CartItem) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }, []);

  /* wipe everything (called after successful checkout) */
  const clear = useCallback(() => setItems([]), []);

  /* derived totals */
  const qty   = items.reduce((s: number, i: CartItem) => s + i.quantity, 0);
  const total = items.reduce((s: number, i: CartItem) => s + i.price * i.quantity, 0);

  return (
    <CartCtx.Provider value={{ items, add, inc, dec, clear, qty, total }}>
      {children}
    </CartCtx.Provider>
  );
};

// ─── hook ───────────────────────────────────────────────────────────────────

export const useCart = () => useContext(CartCtx);
