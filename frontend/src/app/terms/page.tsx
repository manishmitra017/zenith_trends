"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing the Zenith Trends website (zenithtrends.com.au) or placing an order with us, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.

These terms are governed by the laws of Victoria, Australia.`,
  },
  {
    title: "2. Our Services",
    content: `Zenith Trends Pty. Ltd. is a supplier of promotional and corporate merchandise to Australian businesses and organisations. We offer product sourcing, custom branding, kitting, fulfilment and related services.

We reserve the right to refuse service to any organisation at our discretion.`,
  },
  {
    title: "3. Quotations & Pricing",
    content: `All quotes provided are valid for 30 days from the date of issue unless otherwise stated. Prices are quoted in Australian dollars and are exclusive of GST unless expressly stated.

Prices may vary based on quantities, branding requirements, materials and lead times. We reserve the right to withdraw or amend a quote if costs change due to factors outside our control (exchange rates, freight, raw materials).`,
  },
  {
    title: "4. Orders & Acceptance",
    content: `An order is not accepted until confirmed in writing by Zenith Trends. We reserve the right to decline an order for any reason, including if we cannot source the product or the brief is incomplete.

Production will not commence until artwork has been approved in writing and any required deposit has been received.`,
  },
  {
    title: "5. Artwork & Branding",
    content: `You are responsible for ensuring that any artwork, logos or content supplied to us does not infringe the intellectual property rights of any third party. By supplying artwork, you confirm you have the right to use it.

We will provide a digital proof for approval before production. You are responsible for checking proofs carefully. Zenith Trends accepts no liability for errors approved by the client.

A nominal artwork fee may apply for complex design work.`,
  },
  {
    title: "6. Payment Terms",
    content: `Standard payment terms are 50% deposit upon order confirmation and 50% balance prior to dispatch, unless otherwise agreed in writing.

Accounts with approved credit terms are payable within 30 days of invoice date. Overdue accounts may attract interest at 2% per month and may be referred to debt recovery.

We accept payment by EFT/bank transfer. Credit card payments may incur a surcharge.`,
  },
  {
    title: "7. Delivery & Risk",
    content: `Delivery timeframes are estimates only. Zenith Trends is not liable for delays caused by freight carriers, customs, weather or other events outside our control.

Risk in goods passes to you upon dispatch from our warehouse. We recommend all orders be insured in transit for high-value shipments.

Delivery is to the address specified on the purchase order. Re-delivery fees apply if delivery cannot be completed due to incorrect address information.`,
  },
  {
    title: "8. Returns, Defects & Shortages",
    content: `If goods are defective or incorrect, please notify us within 7 days of receipt with photographic evidence. We will arrange replacement or credit at our discretion.

Promotional merchandise is custom-produced and non-refundable unless defective. Industry standards allow for a tolerance of +/- 5% on quantities delivered.

Returns of non-defective goods are not accepted.`,
  },
  {
    title: "9. Intellectual Property",
    content: `All content on the Zenith Trends website — including text, images, logos, layouts and code — is owned by or licensed to Zenith Trends Pty. Ltd. and is protected by Australian copyright law.

You may not reproduce, republish or commercially exploit any content without our written permission.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by law, Zenith Trends' liability for any claim arising from the supply of goods or services is limited to the value of the goods or services in question.

We are not liable for indirect, consequential, special or incidental losses including loss of profit, loss of data or loss of reputation.

Nothing in these terms excludes any right or guarantee you are entitled to under the Australian Consumer Law.`,
  },
  {
    title: "11. Privacy",
    content: `Our handling of your personal information is governed by our Privacy Policy, available at zenithtrends.com.au/privacy.`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms and Conditions are governed by the laws of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.`,
  },
  {
    title: "13. Changes to These Terms",
    content: `We may update these Terms and Conditions from time to time. The current version will always be available on our website. Continued use of our services constitutes acceptance of any updated terms.

Last updated: March 2026`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1D2F] via-[#1A2D44] to-[#0a1729] px-4 py-14 sm:py-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Terms &amp; Conditions</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 text-white/70"
          >
            Last updated: March 2026 · Zenith Trends Pty. Ltd.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-2xl border border-[#4DB8A4]/20 bg-[#4DB8A4]/5 p-6 text-sm text-slate-600"
          >
            <strong className="text-slate-800">Important:</strong> These terms govern all transactions and interactions with Zenith Trends Pty. Ltd. Please read them carefully before placing an order. If you have questions, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#4DB8A4] hover:underline">{siteConfig.email}</a>.
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <h2 className="mb-3 text-xl font-bold text-slate-900">{section.title}</h2>
                <div className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-100 pt-10 text-center">
            <p className="text-sm text-slate-500">Questions? Contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#4DB8A4] hover:underline">{siteConfig.email}</a>
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-[#4DB8A4] hover:underline">Privacy Policy</Link>
              <span className="text-slate-300">|</span>
              <Link href="/contact" className="text-[#4DB8A4] hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
