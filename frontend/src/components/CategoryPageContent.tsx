"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/products";
import type { Category, Product } from "@/data/products";

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

interface CategoryPageContentProps {
  category: Category;
  categorySlug: string;
  products: Product[];
}

export default function CategoryPageContent({
  category,
  categorySlug,
  products,
}: CategoryPageContentProps) {
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
            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{category.name}</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-br from-[#C4B5FD] via-[#DDD6FE] to-[#E8D5A0] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            {/* Sidebar */}
            <aside className="w-full flex-shrink-0 lg:w-64">
              <div className="sticky top-28 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all ${
                        cat.slug === categorySlug
                          ? "bg-[#7C3AED]/10 font-semibold text-[#7C3AED]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#7C3AED]"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          cat.slug === categorySlug
                            ? "bg-[#7C3AED]/10 text-[#7C3AED]"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cat.productCount}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {products.length}
                  </span>{" "}
                  products
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
              >
                {products.map((product) => (
                  <motion.div key={product.id} variants={cardVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Request a Quote CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0F1D2F] via-[#1A2D44] to-[#0F1D2F] p-8 text-center sm:p-12">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need a custom quote for {category.name}?
            </h2>
            <p className="mt-2 text-base text-white/80">
              Tell us about your branding requirements and we will provide a
              tailored solution.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#7C3AED] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
