"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import { getNewProducts } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function NewArrivalsPage() {
  const newProducts = getNewProducts();
  const [selected, setSelected] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(newProducts.map((p) => p.categorySlug)))];
  const filtered = selected === "all" ? newProducts : newProducts.filter((p) => p.categorySlug === selected);

  return (
    <>
      {/* Hero */}
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
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">New Arrivals</span>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              New Arrivals
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            Discover the latest additions to our range — fresh products, innovative designs and trending merchandise for your brand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-sm text-white/60"
          >
            {newProducts.length} new products added recently
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`flex-shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium capitalize transition-all ${
                  selected === cat
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "all" ? "All New" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gradient-to-br from-[#C4B5FD] via-[#DDD6FE] to-[#E8D5A0] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <motion.div
              key={selected}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={cardVariants}>
                  <ProductCard product={product} showNewBadge />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-slate-400">No new arrivals in this category yet.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
