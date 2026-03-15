"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta px-4 py-14 sm:py-16 lg:py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/5" />
        <div className="absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-white/3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Ready to make your brand stand out?
        </h2>
        <p className="mt-3 text-base text-white/75 sm:text-lg">
          Get a free quote today and discover the perfect promotional products
          for your business.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:text-base"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition-all hover:bg-[#C4943D] hover:shadow-xl sm:text-base"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
