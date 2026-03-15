"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { categories } from "@/data/products";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "All Products", href: "/products" },
    { label: "Collections", href: "/collections" },
    { label: "New Arrivals", href: "/new" },
    { label: "Sale", href: "/sale" },
    { label: "Kitting Service", href: "/kitting" },
    { label: "Impact Aware", href: "/impact-aware" },
    { label: "Our Business", href: "/business" },
    { label: "News & Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo/image.png"
                alt="Zenith Trends"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}. Your trusted Australian partner for
              corporate, retail, and promotional merchandise from concept to
              delivery.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2AB09C]" />
                <span className="text-slate-400">{siteConfig.address}</span>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-[#2AB09C]"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-[#2AB09C]" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-[#2AB09C]"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-[#2AB09C]" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-[#2AB09C]" />
                <span className="text-slate-400">{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#2AB09C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-[#2AB09C]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Subscribe to our newsletter for the latest products, deals and
              promotional ideas.
            </p>
            <form
              action="#"
              method="POST"
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-[#2AB09C] focus:ring-2 focus:ring-[#2AB09C]/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2AB09C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#239485]"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all hover:bg-[#2AB09C] hover:text-white"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acknowledgment */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <p className="text-center text-xs leading-relaxed text-slate-500">
            Zenith Trends acknowledges the Traditional Custodians of the land on
            which we operate. We pay our respects to Elders past and present, and
            extend that respect to all Aboriginal and Torres Strait Islander
            peoples. We recognise their continuing connection to land, waters,
            and culture.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; 2026 Zenith Trends Pty. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
            <Link href="/privacy" className="transition-colors hover:text-[#2AB09C]">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="transition-colors hover:text-[#2AB09C]">Terms &amp; Conditions</Link>
            <span className="text-slate-700">|</span>
            <Link href="/impact-aware" className="transition-colors hover:text-emerald-400">Impact Aware</Link>
            <span className="text-slate-700">|</span>
            <Link href="/blog" className="transition-colors hover:text-[#2AB09C]">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
