"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Presentation, Leaf, Briefcase, Gift, Sun, Cpu, Tag } from "lucide-react";
import { collections } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Leaf,
  Briefcase,
  Gift,
  Sun,
  Cpu,
  Golf: Tag, // fallback
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero Banner */}
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
            <span className="text-white">Collections</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Curated Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            Hand-picked product bundles for every occasion — from conference packs to golf days, corporate gifts and sustainable merchandise.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="bg-slate-50 px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {collections.map((col) => {
              const Icon = iconMap[col.icon] || Gift;
              return (
                <motion.div key={col.slug} variants={cardVariants}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-black/8"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={col.image}
                        alt={col.name}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {col.productSlugs.length} products
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#2AB09C]">
                        {col.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {col.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2AB09C] transition-colors group-hover:text-[#1E8F7E]">
                        Browse collection
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1a8a7a] via-[#2AB09C] to-[#1a8a7a] px-4 py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/5" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mt-3 text-white/80">
            We source and create custom kits tailored to your exact brief. Talk to our team about bespoke collection curation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#2AB09C] shadow-lg transition-all hover:bg-white/90"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
