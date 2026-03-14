"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const banners = [
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/69af69329673f.jpg",
    heading: "Premium Promotional Products",
    sub: "Your brand, our expertise. Quality merchandise for every occasion.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/699ccf6dca6bf.jpg",
    heading: "Corporate Merchandise Australia",
    sub: "Bulk orders, fast turnaround, delivered to your door Australia-wide.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/6993799dd69b1.jpg",
    heading: "Eco-Friendly Branded Products",
    sub: "Sustainable merchandise that reflects your brand values.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/693a0638aefcd.jpg",
    heading: "New Season Arrivals",
    sub: "Discover the latest corporate gifts and promotional products.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/699510101f932.jpg",
    heading: "Custom Kitting & Packs",
    sub: "Curated branded kits assembled and delivered ready to gift.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/69166e8fc2705.jpg",
    heading: "2,700+ Products Available",
    sub: "One stop solution for all your corporate and retail merchandise needs.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/68f6d4ae35138.jpg",
    heading: "Apparel & Headwear",
    sub: "Branded clothing, polos, jackets and caps for your team.",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/68e6fd2313add.jpg",
    heading: "Tech & Innovation",
    sub: "Power banks, speakers, wireless chargers and branded tech accessories.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    const idx = (current + 1) % banners.length;
    setDirection(1);
    setCurrent(idx);
  }, [current]);

  const prev = useCallback(() => {
    const idx = (current - 1 + banners.length) % banners.length;
    setDirection(-1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const banner = banners[current];

  return (
    <section className="relative h-[420px] overflow-hidden bg-[#1a8a7a] sm:h-[480px] lg:h-[540px]">
      {/* Banner images — plain <img> to avoid Next.js fill constraints */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0.9 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.src}
            alt={banner.heading}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Dark gradient overlay for text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-text"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="mb-3 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm sm:text-sm">
                Zenith Trends Australia
              </span>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
                {banner.heading}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 drop-shadow sm:text-base">
                {banner.sub}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2AB09C] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-white/70 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2AB09C]" />
                  25+ Years Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2AB09C]" />
                  Australian Owned
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2AB09C]" />
                  2,700+ Products
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/25 p-2 text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-5 sm:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/25 p-2 text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-5 sm:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
