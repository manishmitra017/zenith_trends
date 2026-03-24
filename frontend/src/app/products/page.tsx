"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import { categories, products } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const q = search.toLowerCase().trim();

  const filtered = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q)
  );

  const matchedProducts = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      ).slice(0, 20)
    : [];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Products</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            Explore our full range of promotional and corporate merchandise,
            curated for Australian businesses.
          </motion.p>
        </div>
      </section>

      {/* Search + Category Grid */}
      <section className="bg-gradient-to-br from-[#B4A0F4] via-[#D8D0FC] to-[#B4A0F4] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Search Bar */}
          <div className="mx-auto mb-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products and categories..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((cat) => (
              <motion.div key={cat.slug} variants={cardVariants}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-black/5"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {cat.productCount} products
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-[#7C3AED]">
                      {cat.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Results (when searching) */}
          {matchedProducts.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-5 text-xl font-bold text-slate-800">
                Products matching &ldquo;{search}&rdquo;
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {matchedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:shadow-md hover:shadow-black/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-[#7C3AED]">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-500">{product.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && matchedProducts.length === 0 && q && (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-slate-400">
                No products or categories match your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
