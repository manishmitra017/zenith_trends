"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Leaf,
  Building2,
  Users,
  Globe,
  GraduationCap,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { aboutContent } from "@/data/content";

const tabs = [
  { id: "about", label: "About Us", icon: Building2 },
  { id: "ethical", label: "Ethical Sourcing", icon: ShieldCheck },
  { id: "sustainability", label: "Sustainability", icon: Leaf },
] as const;

type TabId = (typeof tabs)[number]["id"];

const industries = [
  { label: "Corporate Businesses", icon: Building2 },
  { label: "Government Agencies", icon: Globe },
  { label: "Non-Profit Organisations", icon: Heart },
  { label: "Schools & Universities", icon: GraduationCap },
  { label: "Clubs & Associations", icon: Users },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">About Us</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            About Zenith Trends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            {aboutContent.hero}
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-gradient-to-br from-[#B8E4DB] via-[#D9F0EB] to-[#E8D5A0] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed text-slate-600"
            >
              {aboutContent.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base leading-relaxed text-slate-500"
            >
              {aboutContent.detail}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-gradient-to-r from-[#F0DFA0] via-[#F5EAC0] to-[#F0DFA0] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Tab Navigation */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#4DB8A4] text-white shadow-lg shadow-[#4DB8A4]/20"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-4xl"
          >
            {activeTab === "about" && (
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Our Story
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {aboutContent.intro}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  {aboutContent.relationships}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  {aboutContent.industries}
                </p>
              </div>
            )}

            {activeTab === "ethical" && (
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DB8A4]/10">
                  <ShieldCheck className="h-6 w-6 text-[#4DB8A4]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {aboutContent.ethical.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {aboutContent.ethical.content}
                </p>
                <ul className="mt-6 space-y-3">
                  {aboutContent.ethical.standards.map((standard, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4DB8A4]" />
                      <span className="text-sm text-slate-600">{standard}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DB8A4]/10">
                  <Leaf className="h-6 w-6 text-[#4DB8A4]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {aboutContent.sustainability.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {aboutContent.sustainability.content}
                </p>
                <ul className="mt-6 space-y-3">
                  {aboutContent.sustainability.practices.map((practice, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4DB8A4]" />
                      <span className="text-sm text-slate-600">
                        {practice}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Our Industries */}
      <section className="bg-gradient-to-br from-[#0F1D2F] via-[#163B4E] to-[#1A7A6D] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
              Who We Serve
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our Industries
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
              We partner with organisations across every sector to deliver
              branded merchandise that makes an impact.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-[#4DB8A4]/20 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DB8A4]/10 text-[#4DB8A4]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {industry.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
