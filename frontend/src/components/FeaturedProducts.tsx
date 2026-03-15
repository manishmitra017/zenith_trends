"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(featured.length / itemsPerView);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > currentIndex ? 1 : -1));
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const next = useCallback(() => {
    goTo(currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1, 1);
  }, [currentIndex, totalSlides, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1 < 0 ? totalSlides - 1 : currentIndex - 1, -1);
  }, [currentIndex, totalSlides, goTo]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleProducts = featured.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#0F1D2F] px-4 py-16 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#7C3AED]/5" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#7C3AED]/5" />
        <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
              Top Picks
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev / Next Arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm shadow-lg transition-all hover:bg-[#7C3AED] hover:text-white sm:-left-5 sm:h-12 sm:w-12"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm shadow-lg transition-all hover:bg-[#7C3AED] hover:text-white sm:-right-5 sm:h-12 sm:w-12"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`grid gap-5 ${
                  itemsPerView === 1
                    ? "grid-cols-1"
                    : itemsPerView === 2
                      ? "grid-cols-2"
                      : "grid-cols-4"
                }`}
              >
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-[#7C3AED]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
