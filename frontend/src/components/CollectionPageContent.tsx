"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Collection, Product } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface CollectionPageContentProps {
  collection: Collection;
  products: Product[];
}

export default function CollectionPageContent({ collection, products }: CollectionPageContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a8a7a] via-[#2AB09C] to-[#1a6b5f] px-4 py-16 sm:py-20">
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
            <Link href="/collections" className="transition-colors hover:text-white">Collections</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{collection.name}</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            {collection.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            {collection.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 text-sm text-white/60"
          >
            {products.length} products in this collection
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-slate-50 px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {products.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={cardVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-slate-400">No products in this collection yet.</p>
            </div>
          )}

          {/* CTA below grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2AB09C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2AB09C]/20 transition-all hover:bg-[#1E8F7E]"
            >
              Request a Quote for this Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#2AB09C] hover:text-[#2AB09C]"
            >
              View All Collections
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
