"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import type { Product } from "@/data/products";

// ── Types ────────────────────────────────────────────────────────────────────

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface State {
  items: QuoteItem[];
  isOpen: boolean;
}

type Action =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QTY"; productId: number; quantity: number }
  | { type: "CLEAR" }
  | { type: "OPEN_DRAWER" }
  | { type: "CLOSE_DRAWER" }
  | { type: "TOGGLE_DRAWER" }
  | { type: "HYDRATE"; items: QuoteItem[] };

// ── Reducer ──────────────────────────────────────────────────────────────────

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.product.id === action.product.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    case "UPDATE_QTY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.product.id !== action.productId),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.productId
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN_DRAWER":
      return { ...state, isOpen: true };
    case "CLOSE_DRAWER":
      return { ...state, isOpen: false };
    case "TOGGLE_DRAWER":
      return { ...state, isOpen: !state.isOpen };
    case "HYDRATE":
      return { ...state, items: action.items };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────────────────────

interface ContextValue {
  items: QuoteItem[];
  isOpen: boolean;
  totalItems: number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQty: (productId: number, quantity: number) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  isInCart: (productId: number) => boolean;
}

const QuoteCartContext = createContext<ContextValue | null>(null);

const STORAGE_KEY = "zt_quote_cart";

// ── Provider ─────────────────────────────────────────────────────────────────

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const items = JSON.parse(saved) as QuoteItem[];
        if (Array.isArray(items) && items.length > 0) {
          dispatch({ type: "HYDRATE", items });
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Persist items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Ignore storage errors (private browsing, full storage, etc.)
    }
  }, [state.items]);

  const addItem = useCallback((product: Product) => {
    dispatch({ type: "ADD_ITEM", product });
  }, []);

  const removeItem = useCallback((productId: number) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQty = useCallback((productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", productId, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openDrawer = useCallback(() => dispatch({ type: "OPEN_DRAWER" }), []);
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), []);
  const toggleDrawer = useCallback(() => dispatch({ type: "TOGGLE_DRAWER" }), []);
  const isInCart = useCallback(
    (productId: number) => state.items.some((i) => i.product.id === productId),
    [state.items]
  );

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <QuoteCartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        addItem,
        removeItem,
        updateQty,
        clear,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        isInCart,
      }}
    >
      {children}
    </QuoteCartContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useQuoteCart(): ContextValue {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error("useQuoteCart must be used inside <QuoteCartProvider>");
  }
  return ctx;
}
