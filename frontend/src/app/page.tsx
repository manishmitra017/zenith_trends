"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Leaf } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTABanner from "@/components/CTABanner";
import ProductCard from "@/components/ProductCard";
import { aboutContent } from "@/data/content";
import { collections, getNewProducts } from "@/data/products";
import { Presentation, Leaf as LeafIcon, Briefcase, Gift, Sun, Cpu, Tag } from "lucide-react";

const collectionIcons: Record<string, React.ElementType> = {
  Presentation,
  Leaf: LeafIcon,
  Briefcase,
  Gift,
  Sun,
  Cpu,
  Golf: Tag,
};

const blogPosts = [
  {
    slug: "2026-promotional-product-trends",
    title: "2026 Promotional Product Trends",
    excerpt: "In 2026, promotional products continue to evolve beyond simple giveaways. We explore the top trends driving brand engagement.",
    date: "March 2026",
    category: "Industry Trends",
    image: "https://trends-assets.trends.nz/Images/ProductImg/116447-0.jpg",
  },
  {
    slug: "sustainable-merchandise-guide",
    title: "Your Complete Guide to Sustainable Branded Merchandise",
    excerpt: "Here's how to build a merchandise programme that reflects your sustainability commitments without compromising on quality.",
    date: "February 2026",
    category: "Sustainability",
    image: "https://trends-assets.trends.nz/Images/ProductImg/100648-0.jpg",
  },
  {
    slug: "conference-kit-checklist",
    title: "The Ultimate Conference Kit Checklist for 2026",
    excerpt: "Planning a conference? We've put together the essential branded product checklist to make sure delegates leave impressed.",
    date: "February 2026",
    category: "Kitting & Events",
    image: "https://trends-assets.trends.nz/Images/ProductImg/110799-0.jpg",
  },
];

const featureTiles = [
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/699cf31fbba84.jpg",
    href: "/products/technology",
    label: "Tech & Trackers",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/688699913510d.jpg",
    href: "/products/drinkware",
    label: "Drinkware",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/654aefe23f561.jpg",
    href: "/products/bags",
    label: "Bags & Accessories",
  },
  {
    src: "https://trends-assets.trends.nz/Images/Banners/Banners_loggedout/6515402f4a63f.jpg",
    href: "/collections",
    label: "Collections",
  },
];

export default function HomePage() {
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Feature Tiles — 4 promotional banners just like trends.nz */}
      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {featureTiles.map((tile, i) => (
            <motion.div
              key={tile.href + i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={tile.href} className="group relative block aspect-[47/20] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile.src}
                alt={tile.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                className="group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* New Arrivals Teaser */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
                <Sparkles className="h-4 w-4" />
                Just Arrived
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                New Arrivals
              </h2>
              <p className="mt-2 text-base text-slate-500">The freshest products added to our range.</p>
            </div>
            <Link
              href="/new"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DB8A4] transition-colors hover:text-[#3A9A8D]"
            >
              View All New Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {newProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProductCard product={product} showNewBadge />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Teaser */}
      <section className="relative overflow-hidden bg-[#F0FAF7] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
              Curated for Every Occasion
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Collections
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
              Hand-picked product bundles designed for specific occasions — from conference packs to golf days, eco kits and executive gifts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
            {collections.map((col, i) => {
              const Icon = collectionIcons[col.icon] || Gift;
              return (
                <motion.div
                  key={col.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={`/collections/${col.slug}`}
                    className="group relative block aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
                  >
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 14vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2F]/75 via-[#0F1D2F]/30 to-[#0F1D2F]/5 transition-all duration-300 group-hover:from-[#0F1D2F]/60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-2 text-center sm:p-3">
                      <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm sm:h-8 sm:w-8">
                        <Icon className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                      </div>
                      <h3 className="text-[10px] font-bold leading-tight text-white sm:text-xs">
                        {col.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#4DB8A4] hover:text-[#4DB8A4]"
            >
              View All Collections <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* About Us Summary */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
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
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DB8A4] transition-colors hover:text-[#3A9A8D]"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/impact-aware"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  <Leaf className="h-4 w-4" />
                  Impact Aware Programme
                </Link>
              </div>
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
                  className="rounded-2xl border border-[#4DB8A4]/15 bg-gradient-to-br from-[#F0FAF7] to-white p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-extrabold text-[#4DB8A4]">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog/News Preview */}
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
                Latest Insights
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                News &amp; Trends
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DB8A4] transition-colors hover:text-[#3A9A8D]"
            >
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <Link href="/blog">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-[#4DB8A4]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#3A9A8D]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3 w-3" />{post.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 transition-colors group-hover:text-[#4DB8A4] sm:text-base">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 text-xs font-semibold text-[#4DB8A4]">Read more &#8594;</div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Aware Banner */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 px-4 py-12 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                <Leaf className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Impact Aware Programme</h3>
                <p className="mt-0.5 text-sm text-slate-500">
                  Sustainable, recycled and ethically sourced merchandise that reflects your brand values.
                </p>
              </div>
            </div>
            <Link
              href="/impact-aware"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700"
            >
              Shop Sustainable <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
