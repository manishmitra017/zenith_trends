"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Printer,
  Scissors,
  Zap,
  Layers,
  Stamp,
  ShoppingBag,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import ProductCard from "@/components/ProductCard";
import type { Category, Product } from "@/data/products";

const brandingMethods = [
  {
    name: "Screen Printing",
    icon: Printer,
    description: "Ideal for flat surfaces and bold designs",
  },
  {
    name: "Embroidery",
    icon: Scissors,
    description: "Premium stitched branding for apparel",
  },
  {
    name: "Laser Engraving",
    icon: Zap,
    description: "Precise permanent marking on metals",
  },
  {
    name: "Digital Print",
    icon: Layers,
    description: "Full-colour photo-quality reproduction",
  },
  {
    name: "Pad Print",
    icon: Stamp,
    description: "Versatile printing on curved surfaces",
  },
];

interface ProductDetailContentProps {
  product: Product;
  category: Category;
  categorySlug: string;
  relatedProducts: Product[];
}

export default function ProductDetailContent({
  product,
  category,
  categorySlug,
  relatedProducts,
}: ProductDetailContentProps) {
  const { addItem, updateQty, isInCart, items, openDrawer } = useQuoteCart();
  const [qty, setQty] = useState(1);
  const inCart = isInCart(product.id);
  const cartItem = items.find((i) => i.product.id === product.id);

  const handleAddToQuote = () => {
    if (inCart) {
      // Update quantity of existing item
      updateQty(product.id, (cartItem?.quantity ?? 0) + qty);
    } else {
      // Add item then set the chosen quantity
      addItem(product);
      if (qty > 1) updateQty(product.id, qty);
    }
    openDrawer();
  };

  return (
    <>
      {/* Breadcrumb Bar */}
      <section className="border-b border-slate-100 bg-white px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-slate-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#4DB8A4]"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/products"
              className="transition-colors hover:text-[#4DB8A4]"
            >
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/products/${categorySlug}`}
              className="transition-colors hover:text-[#4DB8A4]"
            >
              {category.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-slate-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="bg-gradient-to-br from-[#B8E4DB] via-[#D9F0EB] to-[#E8D5A0] px-4 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Category Badge */}
              <Link
                href={`/products/${categorySlug}`}
                className="mb-3 inline-block rounded-full bg-[#4DB8A4]/10 px-3 py-1 text-xs font-semibold text-[#4DB8A4] transition-colors hover:bg-[#4DB8A4]/20"
              >
                {product.category}
              </Link>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mt-8 rounded-xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
                  Product Highlights
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4DB8A4]" />
                    Custom branding with your logo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4DB8A4]" />
                    Minimum order quantities apply
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4DB8A4]" />
                    Available in multiple colours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4DB8A4]" />
                    Fast turnaround available
                  </li>
                </ul>
              </div>

              {/* Quantity + Add to Quote */}
              <div className="mt-8">
                {/* Qty selector */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl border border-slate-200">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-11 w-11 items-center justify-center rounded-l-xl text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#4DB8A4]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-base font-bold text-slate-900">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="flex h-11 w-11 items-center justify-center rounded-r-xl text-slate-500 transition-colors hover:bg-slate-50 hover:text-[#4DB8A4]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToQuote}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl ${
                      inCart
                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20"
                        : "bg-[#4DB8A4] text-white hover:bg-[#3A9A8D] shadow-[#4DB8A4]/20"
                    }`}
                  >
                    {inCart ? (
                      <>
                        <Check className="h-4 w-4" />
                        Add More to Quote
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        Add to Quote
                      </>
                    )}
                  </button>
                </div>

                {inCart && (
                  <p className="mt-2 text-xs text-emerald-600">
                    ✓ Already in your quote list ({cartItem?.quantity} × added) —{" "}
                    <button
                      onClick={openDrawer}
                      className="font-semibold underline hover:text-emerald-700"
                    >
                      view list
                    </button>
                  </p>
                )}
              </div>

              {/* Secondary actions */}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/products/${categorySlug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#4DB8A4] hover:text-[#4DB8A4]"
                >
                  View All {category.name}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#4DB8A4] hover:text-[#4DB8A4]"
                >
                  Enquire Directly
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branding Methods */}
      <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
              Customisation Options
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Available Branding Methods
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brandingMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all hover:border-[#4DB8A4]/20 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DB8A4]/10 text-[#4DB8A4]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {method.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gradient-to-r from-[#A8DDD0] via-[#C8EBE3] to-[#A8DDD0] px-4 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
                  You May Also Like
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Related Products
                </h2>
              </div>
              <Link
                href={`/products/${categorySlug}`}
                className="hidden items-center gap-1.5 text-sm font-semibold text-[#4DB8A4] transition-colors hover:text-[#3A9A8D] sm:inline-flex"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
