"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import CTABanner from "@/components/CTABanner";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    slug: "2026-promotional-product-trends",
    title: "2026 Promotional Product Trends: What's Shaping How Brands Connect",
    excerpt: "In 2026, promotional products continue to evolve beyond simple giveaways. We explore the top trends driving brand engagement — from smart tech accessories to hyper-personalised eco kits.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Industry Trends",
    image: "https://trends-assets.trends.nz/Images/ProductImg/116447-0.jpg",
    featured: true,
  },
  {
    slug: "sustainable-merchandise-guide",
    title: "Your Complete Guide to Sustainable Branded Merchandise",
    excerpt: "Consumers and clients are increasingly scrutinising brand values. Here's how to build a merchandise programme that reflects your sustainability commitments without compromising on quality or impact.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Sustainability",
    image: "https://trends-assets.trends.nz/Images/ProductImg/100648-0.jpg",
    featured: true,
  },
  {
    slug: "conference-kit-checklist",
    title: "The Ultimate Conference Kit Checklist for 2026",
    excerpt: "Planning a conference or trade show? We've put together the essential branded product checklist to make sure your delegates leave with something they'll actually use.",
    date: "February 2026",
    readTime: "4 min read",
    category: "Kitting & Events",
    image: "https://trends-assets.trends.nz/Images/ProductImg/110799-0.jpg",
  },
  {
    slug: "golf-day-merchandise",
    title: "How to Nail Your Corporate Golf Day Merchandise",
    excerpt: "Golf days are prime brand territory. From on-course essentials to post-round gifts, we share the products that make your golf day branding unforgettable.",
    date: "January 2026",
    readTime: "4 min read",
    category: "Collections",
    image: "https://trends-assets.trends.nz/Images/ProductImg/108432-0.jpg",
  },
  {
    slug: "faux-embroidery-technique",
    title: "Faux Embroidery: Achieve the Stitched Look Without the Limitations",
    excerpt: "Our faux embroidery technique delivers the premium look of embroidered branding with the versatility of full-colour digital print. Discover how it works and where it excels.",
    date: "January 2026",
    readTime: "3 min read",
    category: "Branding Techniques",
    image: "https://trends-assets.trends.nz/Images/ProductImg/112501-0.jpg",
  },
  {
    slug: "executive-gift-ideas",
    title: "10 Executive Gift Ideas That Actually Impress in 2026",
    excerpt: "Generic corporate gifts no longer cut it. We've rounded up 10 premium branded gift options that your VIP clients and top-performing staff will genuinely appreciate.",
    date: "December 2025",
    readTime: "6 min read",
    category: "Corporate Gifts",
    image: "https://trends-assets.trends.nz/Images/ProductImg/117823-0.jpg",
  },
  {
    slug: "kitting-vs-individual-delivery",
    title: "Kitting vs Individual Delivery: Which Is Right for Your Campaign?",
    excerpt: "When launching a branded merchandise campaign, the fulfilment method matters as much as the product. We break down the pros and cons of kit bundles versus individual delivery.",
    date: "December 2025",
    readTime: "5 min read",
    category: "Kitting & Events",
    image: "https://trends-assets.trends.nz/Images/ProductImg/103944-0.jpg",
  },
  {
    slug: "power-of-branded-tech",
    title: "Why Branded Tech Products Are Dominating the Promo Space",
    excerpt: "Bluetooth trackers, wireless earbuds and charging pads — tech products now dominate the promotional merchandise landscape. Here's why they work and how to use them effectively.",
    date: "November 2025",
    readTime: "4 min read",
    category: "Industry Trends",
    image: "https://trends-assets.trends.nz/Images/ProductImg/120156-0.jpg",
  },
  {
    slug: "branded-merchandise-roi",
    title: "How Branded Merchandise Drives Real ROI",
    excerpt: "Think promotional products are just trinkets? The data tells a different story. We break down exactly how branded merchandise generates measurable returns — from brand recall to pipeline acceleration.",
    date: "20 March 2026",
    readTime: "6 min read",
    category: "Strategy",
    image: "https://trends-assets.trends.nz/Images/ProductImg/116447-0.jpg",
  },
  {
    slug: "corporate-gifting-nz-budget-guide",
    title: "Corporate Gifting in NZ: A Budget Guide for Every Relationship",
    excerpt: "Not every corporate gift should cost the same. Here's how to set the right budget based on who you're gifting — from key clients to new prospects — and what to choose at each tier.",
    date: "10 March 2026",
    readTime: "5 min read",
    category: "Corporate Gifting",
    image: "https://trends-assets.trends.nz/Images/ProductImg/117823-0.jpg",
  },
  {
    slug: "wellness-gifts-corporate-nz",
    title: "Why Wellness Gifts Are Winning in Corporate New Zealand",
    excerpt: "Wellness-themed merchandise has moved from niche to mainstream in NZ's corporate gifting scene. Here's why brands are shifting budget towards wellbeing products — and how to get it right.",
    date: "14 February 2026",
    readTime: "5 min read",
    category: "Trends",
    image: "https://trends-assets.trends.nz/Images/ProductImg/100648-0.jpg",
  },
  {
    slug: "promotional-product-mistakes",
    title: "5 Promotional Product Mistakes That Are Costing Your Brand",
    excerpt: "From ordering too many to choosing style over utility, these are the five most common promotional product errors we see — and how to fix them before they drain your marketing budget.",
    date: "15 January 2026",
    readTime: "4 min read",
    category: "Strategy",
    image: "https://trends-assets.trends.nz/Images/ProductImg/110799-0.jpg",
  },
];

const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <motion.article
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-black/8 h-full"
                >
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
                </motion.article>
              </Link>
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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <motion.article
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg h-full"
                >
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
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3 w-3" />{post.date}
                      </span>
                      <span className="text-xs font-semibold text-[#7C3AED]">Read →</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
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
