"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { posts, allCategories } from "@/data/blog";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = posts.filter((p) => p.featured);
  const filtered = activeCategory === "All"
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
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
            <span className="text-white">Blog</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            News &amp; Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            The latest trends, tips and ideas in promotional merchandise, branding and corporate gifting from the Zenith Trends team.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-gradient-to-br from-[#C4B5FD] via-[#DDD6FE] to-[#E8D5A0] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-xl font-bold text-slate-900">Featured Articles</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featured.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-black/8"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#7C3AED]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED]">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter + All Posts */}
      <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Filter */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat !== "All" && <Tag className="h-3.5 w-3.5" />}
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-xs text-slate-400">
                      <span className="rounded-full bg-[#7C3AED]/10 px-2.5 py-0.5 text-xs font-semibold text-[#7C3AED]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-2 transition-colors group-hover:text-[#7C3AED]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs font-semibold text-[#7C3AED]">Read →</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-slate-400">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
