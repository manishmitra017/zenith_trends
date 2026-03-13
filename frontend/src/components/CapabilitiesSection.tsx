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
    <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">
            Our Strengths
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Zenith Trends
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
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
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2AB09C]/20 hover:shadow-lg hover:shadow-[#2AB09C]/5 lg:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2AB09C]/10 text-[#2AB09C] transition-colors duration-300 group-hover:bg-[#2AB09C] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
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
