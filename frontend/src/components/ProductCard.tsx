"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showNewBadge?: boolean;
}

export default function ProductCard({ product, showNewBadge }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      {/* Image */}
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-slate-100"
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
            <span className="rounded-md bg-[#2AB09C] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
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
        <span className="mb-2 inline-block rounded-full bg-[#2AB09C]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#2AB09C]">
          {product.category}
        </span>

        {/* Product Name */}
        <Link href={`/products/${product.categorySlug}/${product.slug}`}>
          <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-[#2AB09C] sm:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {product.description}
        </p>

        {/* Enquire Now */}
        <Link
          href={`/contact?product=${product.slug}`}
          className="mt-3 inline-flex items-center text-xs font-semibold text-[#2AB09C] transition-colors hover:text-[#239485] sm:text-sm"
        >
          Enquire Now
          <svg
            className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
