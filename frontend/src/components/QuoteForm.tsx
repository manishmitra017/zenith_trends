"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { categories } from "@/data/products";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4DB8A4]">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Tell us about your promotional needs and we will get back to you
            with a tailored solution.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-[#4DB8A4]/20 bg-[#4DB8A4]/5 p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4DB8A4]/10">
              <Send className="h-7 w-7 text-[#4DB8A4]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Thank you for your enquiry!
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              We have received your request and will get back to you within 1
              business day.
            </p>
          </div>
        ) : (
          <form
            action="#"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company Pty Ltd"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com.au"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="04XX XXX XXX"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                />
              </div>

              {/* Product Interest */}
              <div>
                <label
                  htmlFor="productInterest"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="other">Other / Custom</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Estimated Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                >
                  <option value="">Select quantity range</option>
                  <option value="50-100">50 - 100 units</option>
                  <option value="100-250">100 - 250 units</option>
                  <option value="250-500">250 - 500 units</option>
                  <option value="500-1000">500 - 1,000 units</option>
                  <option value="1000-5000">1,000 - 5,000 units</option>
                  <option value="5000+">5,000+ units</option>
                </select>
              </div>

              {/* Message - full width */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, branding requirements, deadlines..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4DB8A4] focus:ring-2 focus:ring-[#4DB8A4]/20"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-xs text-slate-400">
                <span className="text-red-500">*</span> Required fields
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4DB8A4] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#4DB8A4]/20 transition-all hover:bg-[#3A9A8D] hover:shadow-xl sm:w-auto"
              >
                Submit Enquiry
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
