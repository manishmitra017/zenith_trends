"use client";

import Link from "next/link";
import { ShoppingBag, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

interface ProductCardProps {
  product: Product;
  showNewBadge?: boolean;
}

export default function ProductCard({ product, showNewBadge }: ProductCardProps) {
  const { addItem, isInCart, openDrawer } = useQuoteCart();
  const inCart = isInCart(product.id);

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    openDrawer();
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
      {/* Image */}
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-slate-50"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {(product.isNew || showNewBadge) && (
            <span className="rounded-md bg-[#7C3AED] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
              New
            </span>
          )}
          {product.isOnSale && product.salePercent && (
            <span className="rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
              -{product.salePercent}%
            </span>
          )}
          {product.isSustainable && (
            <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
              Eco
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="mb-2 inline-block rounded-full bg-[#7C3AED]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#6D28D9]">
          {product.category}
        </span>

        {/* Product Name */}
        <Link href={`/products/${product.categorySlug}/${product.slug}`}>
          <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-[#7C3AED] sm:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {product.description}
        </p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleAddToQuote}
            className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all ${
              inCart
                ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                : "bg-[#7C3AED] text-white shadow-sm shadow-[#7C3AED]/20 hover:bg-[#6D28D9]"
            }`}
          >
            {inCart ? (
              <>
                <Check className="h-3.5 w-3.5" />
                In Quote
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" />
                Add to Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
