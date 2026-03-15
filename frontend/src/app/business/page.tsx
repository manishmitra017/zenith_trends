"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Globe,
  Truck,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTABanner from "@/components/CTABanner";
import { aboutContent } from "@/data/content";

const businessModel = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We maintain strong relationships with factories across the globe, exclusively supplying the Australian market while controlling each step of the value chain.",
  },
  {
    icon: Truck,
    title: "End-to-End Delivery",
    description:
      "From initial concept through production to final delivery at your doorstep, we manage the complete supply chain with full transparency.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous QC procedures at every stage ensure consistent quality. We conduct personal facility inspections, often unannounced, to maintain standards.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We collaborate closely with our customers to understand their needs, budget, and brand vision to deliver solutions that exceed expectations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function BusinessPage() {
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
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Our Business</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Our Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            Discover how we deliver world-class promotional merchandise through
            our integrated supply chain and commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* Business Model */}
      <section className="bg-slate-50 px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">
              How We Work
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Business Model
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
              {aboutContent.relationships}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {businessModel.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md lg:p-8"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2AB09C]/10 text-[#2AB09C]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">
            Our Reach
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Serving All of Australia
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-relaxed text-slate-600"
          >
            {aboutContent.industries}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2AB09C] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2AB09C]/20 transition-all hover:bg-[#1E8F7E] hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
