"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/data/content";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: siteConfig.mobile,
    href: `tel:${siteConfig.mobile.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.hours,
    href: undefined,
  },
];

export default function ContactPage() {
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
            <span className="text-white">Contact Us</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/80"
          >
            Ready to discuss your next project? We would love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-gradient-to-br from-[#B8E4DB] via-[#D9F0EB] to-[#E8D5A0] px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                Whether you need a quick quote or want to discuss a large-scale
                merchandise program, our team is here to help.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4DB8A4]/10 text-[#4DB8A4]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-slate-700">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl p-3 transition-all hover:bg-white hover:shadow-sm"
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={
                        item.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="p-3">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex h-56 items-center justify-center bg-slate-200">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-slate-400" />
                    <p className="text-sm font-medium text-slate-500">
                      Williams Landing, VIC 3027
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-[#4DB8A4] hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
