"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Tag, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { getSaleProducts } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function SalePage() {
  const saleProducts = getSaleProducts();
  const [sortBy, setSortBy] = useState<"discount" | "name">("discount");

  const sorted = [...saleProducts].sort((a, b) => {
    if (sortBy === "discount") return (b.salePercent ?? 0) - (a.salePercent ?? 0);
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-500 to-orange-500 px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
          {/* Sale tag decorations */}
          <div className="absolute right-8 top-8 rotate-12 opacity-10">
            <Tag className="h-48 w-48 text-white" />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Sale</span>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Tag className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Sale
              </h1>
              <p className="text-sm font-medium text-white/70">Limited time offers</p>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg text-white/85"
          >
            Significant savings on selected promotional products. Perfect for bulk orders, events and campaign runs. All products still available with full custom branding.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-6"
          >
            <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-white">{saleProducts.length}</p>
              <p className="text-xs text-white/70">Products on sale</p>
            </div>
            <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-white">Up to {Math.max(...saleProducts.map(p => p.salePercent ?? 0))}%</p>
              <p className="text-xs text-white/70">Maximum savings</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sort Bar */}
      <section className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{sorted.length}</span> products on sale
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <button
              onClick={() => setSortBy("discount")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                sortBy === "discount" ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Biggest Discount
            </button>
            <button
              onClick={() => setSortBy("name")}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                sortBy === "name" ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Name A-Z
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            key={sortBy}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {sorted.map((product) => (
              <motion.div key={product.id} variants={cardVariants}>
                <Link
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-black/5"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Sale Badge */}
                    <div className="absolute left-3 top-3 rounded-lg bg-rose-500 px-2.5 py-1 text-sm font-bold text-white shadow-lg">
                      -{product.salePercent}%
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-xs font-medium text-rose-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-slate-900 transition-colors group-hover:text-[#4DB8A4] line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                      {product.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600">
                        Save {product.salePercent}%
                      </span>
                      <span className="text-xs font-semibold text-[#4DB8A4]">Get Quote →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-rose-100 bg-rose-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-slate-900">Need a bulk order quote?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Sale prices apply to standard orders. For large volume enquiries, contact us for additional pricing.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-rose-600"
            >
              Request Bulk Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
