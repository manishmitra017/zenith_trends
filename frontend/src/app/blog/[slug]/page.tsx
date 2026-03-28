import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/blog-content";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-14 sm:py-18">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90 line-clamp-1">{article.title}</span>
          </nav>

          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
            <Tag className="h-3 w-3" />
            {article.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
            <span className="text-white/40">By {article.author}</span>
          </div>

          {/* Excerpt */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-200 sm:h-80 lg:h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Article body */}
      <section className="bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            {article.body.map((section, i) => (
              <div key={i} className={i > 0 ? "mt-10" : ""}>
                {section.heading && (
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed text-slate-600 mb-4"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Inline CTA box */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 via-[#DDD6FE]/30 to-[#E8D5A0]/30 border border-[#7C3AED]/20 px-6 py-8 sm:px-8">
            <h3 className="text-xl font-bold text-slate-900">
              {article.ctaHeading}
            </h3>
            <p className="mt-2 text-slate-600">{article.ctaBody}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              >
                Get in touch
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Browse products
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
