"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CategoryGrid() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">
            Explore Our Range
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Product Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
            From corporate apparel to eco-friendly solutions, find the perfect
            promotional products for your brand.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={cardVariants}>
              <Link
                href={`/products/${cat.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl"
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 transition-all duration-300 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                  <h3 className="text-sm font-bold text-white sm:text-base lg:text-lg">
                    {cat.name}
                  </h3>
                  <span className="mt-1 inline-flex w-fit items-center rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm sm:text-xs">
                    {cat.productCount}{" "}
                    {cat.productCount === 1 ? "product" : "products"}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
