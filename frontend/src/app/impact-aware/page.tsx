"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight, ArrowRight, Leaf, Recycle, ShieldCheck, Sprout,
  Wind, Droplets, CheckCircle2, Globe,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { getSustainableProducts } from "@/data/products";

const pillars = [
  {
    icon: Recycle,
    title: "Recycled Materials",
    description: "We prioritise products made from post-consumer recycled plastics, reclaimed ocean plastics, and upcycled materials — reducing landfill and demand for virgin resources.",
    colour: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Sprout,
    title: "Natural & Organic",
    description: "From bamboo and cork to organic cotton and kraft paper, we champion natural materials that are biodegradable, renewable and kinder to the planet.",
    colour: "text-green-600 bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Manufacturing",
    description: "All Impact Aware products come from SEDEX-approved, SMETA-audited facilities. We conduct unannounced inspections and uphold ILO labour standards across our supply chain.",
    colour: "text-teal-600 bg-teal-50",
  },
  {
    icon: Wind,
    title: "Carbon Conscious",
    description: "We work with suppliers who use renewable energy, and we offset the carbon footprint of shipping through our partnership with Australian carbon programs.",
    colour: "text-sky-600 bg-sky-50",
  },
  {
    icon: Droplets,
    title: "Reduced Packaging",
    description: "All Impact Aware products ship with minimal, recyclable or compostable packaging. We're eliminating single-use plastics from our fulfilment operations.",
    colour: "text-blue-600 bg-blue-50",
  },
  {
    icon: Globe,
    title: "Local Partnerships",
    description: "Where possible, we partner with Australian-made suppliers and indigenous-owned businesses to reduce transport emissions and support local communities.",
    colour: "text-violet-600 bg-violet-50",
  },
];

const certifications = [
  { name: "SEDEX Member", description: "Supplier Ethical Data Exchange — full supply chain transparency" },
  { name: "SMETA Audited", description: "Sedex Members Ethical Trade Audit across all key facilities" },
  { name: "ILO Standards", description: "Aligned with International Labour Organisation core conventions" },
  { name: "FSC Certified", description: "Forest Stewardship Council certified paper and wood products" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ImpactAwarePage() {
  const sustainableProducts = getSustainableProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-green-600 to-teal-600 px-4 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Impact Aware</span>
          </motion.nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                <Leaf className="h-4 w-4" />
                Impact Aware Programme
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Merchandise<br />with Purpose
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 max-w-xl text-lg text-white/85"
              >
                Our Impact Aware range brings together the best in sustainable, recycled and ethically sourced promotional products — so your brand can make a statement and a difference.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition-all hover:bg-white/90"
                >
                  Shop Sustainable
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: `${sustainableProducts.length}+`, label: "Sustainable products" },
                { value: "100%", label: "Ethically sourced" },
                { value: "Zero", label: "Single-use packaging" },
                { value: "2030", label: "Net-zero target" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="bg-gradient-to-br from-[#B8E4DB] via-[#D9F0EB] to-[#E8D5A0] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600">Our Commitment</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Six Pillars of Sustainability</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
              Impact Aware is our holistic approach to responsible merchandise — covering materials, manufacturing, packaging, logistics and community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md lg:p-8"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.colour}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600">Verified & Certified</span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Our Certifications</h2>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{cert.name}</h3>
                <p className="mt-1.5 text-xs text-slate-500">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Products */}
      <section id="products" className="bg-gradient-to-r from-[#A8DDD0] via-[#C8EBE3] to-[#A8DDD0] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600">Shop Responsibly</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Impact Aware Products</h2>
              <p className="mt-2 text-base text-slate-500">{sustainableProducts.length} sustainable products available</p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {sustainableProducts.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute left-2 top-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      Eco
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-slate-900 line-clamp-2 transition-colors group-hover:text-emerald-600">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400 capitalize">{product.category}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
