"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  CheckCircle,
  Loader2,
  ClipboardList,
} from "lucide-react";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

// Set via NEXT_PUBLIC_QUOTE_API_URL in .env.local (populated after CDK deploy)
const QUOTE_API_URL = process.env.NEXT_PUBLIC_QUOTE_API_URL ?? "";

type Step = "cart" | "form" | "success";

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  remarks: string;
}

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
  remarks: "",
};

// ── Field component ──────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function QuoteCart() {
  const {
    items,
    isOpen,
    totalItems,
    removeItem,
    updateQty,
    clear,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  } = useQuoteCart();

  const [step, setStep] = useState<Step>("cart");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormState & { submit: string }>>({});

  const field = useCallback(
    (key: keyof FormState) => ({
      value: form[key],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
      },
    }),
    [form, errors]
  );

  const inputCls = (key: keyof FormState) =>
    `w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-[#2AB09C]/20 ${
      errors[key]
        ? "border-rose-300 focus:border-rose-400"
        : "border-slate-200 focus:border-[#2AB09C]"
    }`;

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});

    try {
      const endpoint = QUOTE_API_URL || "/api/quote"; // fallback to local during dev
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          products: items.map((i) => ({
            name: i.product.name,
            category: i.product.category,
            slug: i.product.slug,
            quantity: i.quantity,
          })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      clear();
      setStep("success");
    } catch {
      setErrors({
        submit:
          "Something went wrong. Please email us directly at info@zenithtrends.com.au",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const reset = useCallback(() => {
    setStep("cart");
    setForm(EMPTY_FORM);
    setErrors({});
  }, []);

  // ── Render ────────────────────────────────────────────────────

  return (
    <>
      {/* Floating quote button */}
      <button
        onClick={toggleDrawer}
        aria-label={`Quote list — ${totalItems} item${totalItems !== 1 ? "s" : ""}`}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2AB09C] text-white shadow-2xl shadow-[#2AB09C]/30 transition-all hover:scale-105 hover:bg-[#1E8F7E] focus:outline-none focus:ring-2 focus:ring-[#2AB09C] focus:ring-offset-2"
      >
        <ShoppingBag className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={closeDrawer}
          />
        )}
      </AnimatePresence>

      {/* Slide-out drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#2AB09C] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="h-5 w-5 text-white/80" />
                <div>
                  <h2 className="text-base font-bold text-white leading-none">
                    Quote Request
                  </h2>
                  <p className="mt-0.5 text-xs text-white/70">
                    {totalItems} item{totalItems !== 1 ? "s" : ""} in your list
                  </p>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Step indicator (cart → form) */}
            {step !== "success" && items.length > 0 && (
              <div className="flex border-b border-slate-100">
                {(["cart", "form"] as const).map((s, i) => (
                  <div
                    key={s}
                    className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors ${
                      step === s
                        ? "border-b-2 border-[#2AB09C] text-[#2AB09C]"
                        : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        step === s ? "bg-[#2AB09C] text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {s === "cart" ? "Your List" : "Your Details"}
                  </div>
                ))}
              </div>
            )}

            {/* ── Body ─────────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto">

              {/* STEP: Cart */}
              {step === "cart" && (
                <>
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                        <ShoppingBag className="h-8 w-8 text-slate-300" />
                      </div>
                      <p className="text-base font-semibold text-slate-700">
                        Your list is empty
                      </p>
                      <p className="mt-1.5 text-sm text-slate-400">
                        Browse products and click &ldquo;Add to Quote&rdquo; to build your request.
                      </p>
                      <button
                        onClick={closeDrawer}
                        className="mt-6 rounded-xl bg-[#2AB09C] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#1E8F7E]"
                      >
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {items.map(({ product, quantity }) => (
                        <div key={product.id} className="flex gap-3 p-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-[72px] w-[72px] flex-shrink-0 rounded-xl bg-slate-100 object-cover"
                          />
                          <div className="flex min-w-0 flex-1 flex-col">
                            <Link
                              href={`/products/${product.categorySlug}/${product.slug}`}
                              onClick={closeDrawer}
                              className="text-sm font-semibold text-slate-900 line-clamp-2 hover:text-[#2AB09C] transition-colors"
                            >
                              {product.name}
                            </Link>
                            <span className="mt-0.5 text-xs text-slate-400">
                              {product.category}
                            </span>

                            <div className="mt-auto flex items-center justify-between pt-2">
                              {/* Qty controls */}
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => updateQty(product.id, quantity - 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-[#2AB09C] hover:text-[#2AB09C]"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-8 text-center text-sm font-bold text-slate-900">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => updateQty(product.id, quantity + 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-[#2AB09C] hover:text-[#2AB09C]"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              {/* Remove */}
                              <button
                                onClick={() => removeItem(product.id)}
                                className="rounded-lg p-1.5 text-slate-300 transition-colors hover:text-rose-500"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* STEP: Form */}
              {step === "form" && (
                <form
                  id="quote-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 p-5"
                  noValidate
                >
                  <p className="text-sm text-slate-500">
                    Fill in your details and we&apos;ll get back to you with
                    pricing within 1 business day.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First name *" error={errors.firstName}>
                      <input
                        type="text"
                        autoComplete="given-name"
                        className={inputCls("firstName")}
                        {...field("firstName")}
                      />
                    </Field>
                    <Field label="Last name *" error={errors.lastName}>
                      <input
                        type="text"
                        autoComplete="family-name"
                        className={inputCls("lastName")}
                        {...field("lastName")}
                      />
                    </Field>
                  </div>

                  <Field label="Company name *" error={errors.company}>
                    <input
                      type="text"
                      autoComplete="organization"
                      className={inputCls("company")}
                      {...field("company")}
                    />
                  </Field>

                  <Field label="Phone *" error={errors.phone}>
                    <input
                      type="tel"
                      autoComplete="tel"
                      className={inputCls("phone")}
                      {...field("phone")}
                    />
                  </Field>

                  <Field label="Email address *" error={errors.email}>
                    <input
                      type="email"
                      autoComplete="email"
                      className={inputCls("email")}
                      {...field("email")}
                    />
                  </Field>

                  <Field
                    label="Remarks"
                    error={undefined}
                  >
                    <textarea
                      rows={3}
                      placeholder="Branding requirements, event date, delivery notes, colours…"
                      className="w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-[#2AB09C] focus:ring-2 focus:ring-[#2AB09C]/20"
                      {...field("remarks")}
                    />
                  </Field>

                  {errors.submit && (
                    <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-600">
                      {errors.submit}
                    </div>
                  )}
                </form>
              )}

              {/* STEP: Success */}
              {step === "success" && (
                <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Quote Submitted!
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Thanks{form.firstName ? ` ${form.firstName}` : ""}! We&apos;ve received
                    your request and will respond to{" "}
                    <span className="font-semibold text-slate-700">
                      {form.email}
                    </span>{" "}
                    within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      reset();
                      closeDrawer();
                    }}
                    className="mt-7 rounded-xl bg-[#2AB09C] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1E8F7E]"
                  >
                    Continue Browsing
                  </button>
                </div>
              )}
            </div>

            {/* ── Footer CTA ────────────────────────────────────── */}
            {step !== "success" && items.length > 0 && (
              <div className="border-t border-slate-100 bg-white px-4 py-4 space-y-2.5">
                {step === "cart" ? (
                  <>
                    <button
                      onClick={() => setStep("form")}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2AB09C] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2AB09C]/20 transition-all hover:bg-[#1E8F7E]"
                    >
                      Request A Quote
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      No payment required · We&apos;ll contact you with pricing
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        onClick={() => setStep("cart")}
                        className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-[#2AB09C] hover:text-[#2AB09C]"
                      >
                        ← Edit List
                      </button>
                      <button
                        type="submit"
                        form="quote-form"
                        disabled={submitting}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2AB09C] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1E8F7E] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting && (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        )}
                        Submit Quote
                      </button>
                    </div>
                    <p className="text-center text-[11px] text-slate-400">
                      We respond within 1 business day
                    </p>
                  </>
                )}
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
