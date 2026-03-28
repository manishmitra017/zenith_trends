"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import CTABanner from "@/components/CTABanner";
import { getPostBySlug, posts } from "@/data/blog";

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post || !post.content) {
    return (
      <>
        <section className="bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Article Coming Soon
            </h1>
            <p className="mt-4 text-lg text-white/70">
              This article is currently being written by our team. Check back
              soon.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#7C3AED] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#6D28D9]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>
        <CTABanner />
      </>
    );
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      {/* Hero with full-width image overlay */}
      <section className="relative min-h-[420px] sm:min-h-[480px]">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2F] via-[#0F1D2F]/85 to-[#0F1D2F]/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-12 pt-8 sm:pb-16 sm:pt-10">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-sm text-white/50"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70 line-clamp-1">{post.category}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-block rounded-full bg-[#7C3AED] px-3.5 py-1 text-xs font-semibold tracking-wide text-white">
              {post.category}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED] text-xs font-bold text-white">
                ZT
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-white/50">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="relative bg-[#FAFAF9]">
        {/* Decorative top accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#C62828] to-[#D4A853]" />

        <div className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-0"
            >
              <div className="rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-100 sm:px-10 sm:py-10">
                <div className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-[1.5rem] prose-h2:text-slate-900 prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-[1.15rem] prose-h3:text-slate-800 prose-p:text-[1.05rem] prose-p:leading-[1.8] prose-p:text-slate-700 prose-a:font-semibold prose-a:text-[#7C3AED] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:text-[1.05rem] prose-li:leading-[1.8] prose-li:marker:text-[#7C3AED] prose-table:overflow-hidden prose-table:rounded-xl prose-table:ring-1 prose-table:ring-slate-200 prose-th:bg-[#0F1D2F] prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-white prose-td:border-b prose-td:border-slate-100 prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-slate-600 prose-hr:my-8 prose-hr:border-slate-200">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>

              {/* Share / Back */}
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#7C3AED]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </Link>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-[#7C3AED]"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden space-y-6 lg:block"
            >
              {/* Author Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#9F67FF] text-sm font-bold text-white">
                    ZT
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  Helping Australian businesses build brands through strategic
                  merchandise — from concept to delivery.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] p-6 text-white shadow-sm">
                <BookOpen className="mb-3 h-6 w-6 text-white/70" />
                <h3 className="text-sm font-bold">Need help with merch?</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  Our team can help you build a merchandise programme that
                  delivers real results.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  Get in Touch
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Related in Sidebar */}
              {relatedPosts.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="mb-4 text-sm font-bold text-slate-900">
                    Related Reading
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block"
                      >
                        <h4 className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-[#7C3AED] line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400">
                          {related.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="border-t border-slate-200 bg-white px-4 py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-[#7C3AED]/30 hover:shadow-md"
            >
              <ArrowLeft className="h-5 w-5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-[#7C3AED]" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-400">Previous</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 line-clamp-1 group-hover:text-[#7C3AED]">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end gap-3 rounded-xl border border-slate-200 p-4 text-right transition-all hover:border-[#7C3AED]/30 hover:shadow-md"
            >
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-400">Next</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 line-clamp-1 group-hover:text-[#7C3AED]">
                  {nextPost.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-[#7C3AED]" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Mobile Related Articles (shown below on small screens) */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-12 lg:hidden">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-lg font-bold text-slate-900">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedPosts.map((related, i) => (
                <motion.article
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <Link href={`/blog/${related.slug}`}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={related.image}
                        alt={related.title}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="rounded-full bg-[#7C3AED]/10 px-2.5 py-0.5 text-xs font-semibold text-[#7C3AED]">
                        {related.category}
                      </span>
                      <h3 className="mt-2 text-sm font-bold text-slate-900 line-clamp-2 transition-colors group-hover:text-[#7C3AED]">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
