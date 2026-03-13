"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTABanner from "@/components/CTABanner";
import { aboutContent } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* About Us Summary */}
      <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">
                Who We Are
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                About Zenith Trends
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {aboutContent.intro}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {aboutContent.detail}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2AB09C] transition-colors hover:text-[#1E8F7E]"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "25+", label: "Years Experience" },
                { value: "1000+", label: "Products Available" },
                { value: "100%", label: "Australian Owned" },
                { value: "Global", label: "Supplier Network" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-[#2AB09C]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
