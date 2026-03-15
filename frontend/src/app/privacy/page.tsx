"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/content";

const sections = [
  {
    title: "1. About This Policy",
    content: `This Privacy Policy describes how Zenith Trends Pty. Ltd. ("Zenith Trends", "we", "us", or "our") collects, uses, discloses, stores and protects personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).

By accessing our website or using our services, you agree to the practices described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following types of personal information:

• Contact information (name, email address, phone number, business address)
• Business information (company name, ABN, job title)
• Order and transaction details (purchase history, quote requests, delivery addresses)
• Communication records (emails, phone notes, live chat transcripts)
• Website usage data (pages visited, browser type, IP address, referral source via cookies and analytics tools)

We collect information directly from you when you submit enquiry forms, request quotes, register an account, subscribe to our newsletter, or contact us by phone or email.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information to:

• Process and fulfil orders, quote requests and service enquiries
• Communicate with you about your orders, products and our services
• Send newsletters, product updates and promotional offers (only where you have opted in)
• Improve our website, products and customer experience
• Comply with legal obligations and resolve disputes
• Detect and prevent fraud or misuse of our services

We will not use your personal information for any purpose that is incompatible with the reason it was collected without your consent.`,
  },
  {
    title: "4. Disclosure of Your Information",
    content: `We may share your information with:

• Service providers who assist us in operating our business (e.g., freight carriers, payment processors, IT systems providers) — all bound by confidentiality obligations
• Our overseas manufacturing and logistics partners, where required to fulfil your order (see Section 5)
• Professional advisers (accountants, lawyers, insurers)
• Government bodies or law enforcement agencies where required by law

We do not sell, rent or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "5. Overseas Disclosure",
    content: `In order to fulfil orders, we work with manufacturing and logistics partners located in countries including China, India, Bangladesh and other regions. When we disclose your information to overseas recipients, we take reasonable steps to ensure those recipients handle your information in a manner consistent with the Australian Privacy Principles.

By using our services, you consent to the disclosure of your personal information to overseas recipients as described in this policy.`,
  },
  {
    title: "6. Cookies & Website Analytics",
    content: `Our website uses cookies and similar tracking technologies to improve your browsing experience and analyse site usage. Cookies are small text files stored on your device. You can configure your browser to refuse cookies, though some features of our website may not function correctly as a result.

We use Google Analytics to understand how visitors use our website. This service may collect anonymous data about your visit. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.`,
  },
  {
    title: "7. Security",
    content: `We take reasonable technical and organisational measures to protect your personal information from loss, misuse, unauthorised access, disclosure, alteration and destruction. Our website uses SSL/TLS encryption for data in transit.

While we take all reasonable precautions, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information.`,
  },
  {
    title: "8. Your Rights & Access",
    content: `You have the right to:

• Request access to the personal information we hold about you
• Request correction of inaccurate or outdated information
• Opt out of marketing communications at any time
• Raise a complaint about how we have handled your personal information

To exercise these rights, please contact us at the details below. We will respond within 30 days.`,
  },
  {
    title: "9. Retention",
    content: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, to comply with our legal obligations, and to resolve disputes. When information is no longer required, we securely destroy or de-identify it.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Privacy Officer:

Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
Post: Privacy Officer, Zenith Trends Pty. Ltd., ${siteConfig.address}

If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The current version will always be available on our website. We encourage you to review this policy periodically.

Last updated: March 2026`,
  },
];

export default function PrivacyPage() {
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
            <span className="text-white">Privacy Policy</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Privacy Policy
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
      <section className="bg-gradient-to-br from-[#C4B5FD] via-[#DDD6FE] to-[#E8D5A0] px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-6 text-sm text-slate-600"
          >
            <strong className="text-slate-800">Summary:</strong> We collect your business and contact details to process orders and enquiries, communicate with you, and improve our services. We do not sell your data. You can access, correct or delete your information at any time by contacting us.
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
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
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#7C3AED] hover:underline">{siteConfig.email}</a>
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <Link href="/terms" className="text-[#7C3AED] hover:underline">Terms &amp; Conditions</Link>
              <span className="text-slate-300">|</span>
              <Link href="/contact" className="text-[#7C3AED] hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
