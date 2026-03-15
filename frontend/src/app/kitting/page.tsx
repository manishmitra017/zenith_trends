"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight, ArrowRight, Package, Search, Palette, PackageCheck,
  Truck, Repeat2, CheckCircle2, Boxes, Building2, GraduationCap, Heart, Globe,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Brief & Discovery",
    description: "Tell us your goal, audience, budget and timeline. We listen and create a customised kitting plan aligned with your brand strategy.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Product Curation",
    description: "Our experts hand-pick products that complement each other and deliver maximum brand impact. We source, sample and present options for your approval.",
  },
  {
    step: "03",
    icon: Package,
    title: "Custom Branding",
    description: "Every item is branded in our facility using the appropriate method — print, embroidery, engraving or full-colour digital — to meet your exact specification.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Kit Assembly",
    description: "Products are carefully assembled into presentation packaging — from eco-friendly boxes to luxury rigid cases — with your branded inserts and tissue.",
  },
  {
    step: "05",
    icon: Truck,
    title: "Fulfilment & Delivery",
    description: "We handle bulk delivery to a single location or individual fulfilment to multiple recipients anywhere across Australia.",
  },
  {
    step: "06",
    icon: Repeat2,
    title: "Ongoing Management",
    description: "Set up a standing kit programme with us. We manage inventory, reorders and seasonal updates — you focus on your business.",
  },
];

const kitTypes = [
  {
    name: "Welcome Kits",
    description: "Make a powerful first impression with new employee or client onboarding kits packed with branded essentials.",
    image: "/products/65.jpg",
    examples: ["Branded notebook + pen", "Custom mug or bottle", "USB drive", "Branded tote bag", "Personalised welcome card"],
  },
  {
    name: "Conference Kits",
    description: "Give delegates everything they need for a productive event in one sleek, branded package.",
    image: "/products/22.jpg",
    examples: ["Conference satchel", "Lanyard + badge", "Notepad + pen", "USB drive", "Water bottle"],
  },
  {
    name: "Executive Gift Kits",
    description: "Impress high-value clients and VIPs with luxuriously curated gift sets that elevate your brand.",
    image: "/products/101.jpg",
    examples: ["Premium pen", "Vacuum flask", "Wireless earbuds", "Leather notebook", "Gift box with tissue"],
  },
  {
    name: "Eco Kits",
    description: "Showcase your sustainability credentials with a fully eco-friendly kit made from natural and recycled materials.",
    image: "/products/3.jpg",
    examples: ["Bamboo pen", "Recycled tote", "Glass water bottle", "Cork notebook", "Seed paper card"],
  },
];

const industries = [
  { icon: Building2, label: "Corporate & Finance" },
  { icon: Globe, label: "Government & Defence" },
  { icon: Heart, label: "Healthcare & Aged Care" },
  { icon: GraduationCap, label: "Education" },
  { icon: Boxes, label: "Retail & FMCG" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function KittingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a8a7a] via-[#2AB09C] to-[#1a6b5f] px-4 py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Kitting</span>
          </motion.nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90"
              >
                Branded Kitting Service
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Kitting &amp;<br />Fulfilment
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 max-w-xl text-lg text-white/80"
              >
                We design, source, brand and assemble complete merchandise kits — then deliver them to your door or directly to your recipients anywhere in Australia.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#2AB09C] shadow-lg transition-all hover:bg-white/90"
                >
                  Start a Kitting Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Browse Collections
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Kitting projects delivered" },
                { value: "48hr", label: "Express assembly available" },
                { value: "Australia-wide", label: "Individual fulfilment" },
                { value: "100%", label: "Custom branded packaging" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">Our Process</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">How Kitting Works</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500">
              A simple, end-to-end process managed by our experienced team — from initial brief to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-[#2AB09C]/20 hover:shadow-lg lg:p-8"
                >
                  <span className="absolute right-5 top-5 text-5xl font-black text-slate-50 transition-colors group-hover:text-[#2AB09C]/10">
                    {step.step}
                  </span>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2AB09C]/10 text-[#2AB09C] transition-all group-hover:bg-[#2AB09C] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kit Types */}
      <section className="bg-slate-50 px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">Popular Kits</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Kit Types We Build</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
              Every kit is fully customisable. These are some of our most popular configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kitTypes.map((kit, i) => (
              <motion.div
                key={kit.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img src={kit.image} alt={kit.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-base font-bold text-white">{kit.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-500">{kit.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {kit.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-[#2AB09C]" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2AB09C]">Who We Help</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-6 py-4"
                >
                  <Icon className="h-5 w-5 text-[#2AB09C]" />
                  <span className="text-sm font-semibold text-slate-700">{ind.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
