"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Link as LinkIcon,
  Palette,
  Warehouse,
  Trophy,
  Grid3X3,
  type LucideIcon,
} from "lucide-react";
import { businessCapabilities } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Link: LinkIcon,
  Palette,
  Warehouse,
  Trophy,
  Grid3X3,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1D2F] px-4 py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#4DB8A4]/5 blur-3xl" />
        <div className="absolute -bottom-10 left-1/4 h-60 w-60 rounded-full bg-[#D4A853]/5 blur-2xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
            Our Strengths
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose Zenith Trends
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            With over 25 years of industry experience, we deliver end-to-end
            merchandise solutions that elevate your brand.
          </p>
        </div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {businessCapabilities.map((cap) => {
            const Icon = iconMap[cap.icon] || Zap;
            return (
              <motion.div
                key={cap.title}
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#4DB8A4]/30 hover:bg-white/10 lg:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DB8A4]/15 text-[#4DB8A4] transition-colors duration-300 group-hover:bg-[#4DB8A4] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
