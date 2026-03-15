"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/products";
import { siteConfig } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Collections", href: "/collections" },
    { label: "New", href: "/new" },
    { label: "Sale", href: "/sale" },
    { label: "Kitting", href: "/kitting" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        isScrolled ? "shadow-lg shadow-black/8" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#2AB09C] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white/80"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white/80"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{siteConfig.hours}</span>
            <span className="md:hidden">Mon-Fri 8:30-5:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/image.png"
              alt="Zenith Trends"
              width={180}
              height={50}
              className="h-10 w-auto sm:h-12 lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#2AB09C]/10 hover:text-[#2AB09C]"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full z-50 w-72 rounded-xl border border-slate-100 bg-white p-2 shadow-xl shadow-black/8"
                      >
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#2AB09C]/10 hover:text-[#2AB09C]"
                          >
                            <span>{cat.name}</span>
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                              {cat.productCount}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.label === "Sale" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
                >
                  {link.label}
                </Link>
              ) : link.label === "New" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold text-[#2AB09C] transition-colors hover:bg-[#2AB09C]/10"
                >
                  {link.label}
                  <span className="rounded-full bg-[#2AB09C] px-1.5 py-0.5 text-[9px] font-bold text-white leading-none">✦</span>
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#2AB09C]/10 hover:text-[#2AB09C]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#2AB09C]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Request Quote CTA (desktop) */}
            <Link
              href="/contact"
              className="hidden rounded-lg bg-[#2AB09C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#239485] lg:inline-flex"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (expandable) */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-100"
            >
              <div className="mx-auto max-w-7xl px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition-colors focus:border-[#2AB09C] focus:ring-2 focus:ring-[#2AB09C]/20"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-out panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Image
                  src="/logo/image.png"
                  alt="Zenith Trends"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="px-3 py-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 border-l-2 border-[#2AB09C]/20 pl-3">
                              <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#2AB09C]"
                              >
                                All Products
                              </Link>
                              {categories.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  href={`/products/${cat.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-[#2AB09C]"
                                >
                                  {cat.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#2AB09C]"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="border-t border-slate-100 px-5 py-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-lg bg-[#2AB09C] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#239485]"
                >
                  Get a Quote
                </Link>
                <div className="mt-4 space-y-2 text-xs text-slate-500">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
