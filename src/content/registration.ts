/**
 * Registration conversion content (Section 6).
 * Concise benefits only — no marketing fluff (04-conversion, 08-copywriting).
 */

export const registrationBenefits = [
  "AI Foundations — how modern AI and agents work",
  "AI APIs — live setup and first requests",
  "Build your first AI agent — no coding required",
  "Introduction to AI Agents & Automation",
  "Certificate of completion after the masterclass",
  "Free career roadmap for your next step",
  "Beginner Friendly",
  "Live Q&A Included",
] as const;

export const whyAttend = {
  eyebrow: "Reserve your seat",
  title: "Your free introduction to AI Agents & Automation.",
  body: "Book any day for a free 2-hour live session. Learn AI basics, work with AI APIs, and build your first AI agent — then decide if the full 4-week program is right for you.",
} as const;

/** Compact ticket lines above the form (Issue 6). */
export const ticketSummary = {
  label: "Your ticket",
  lines: [
    "Your chosen date and time slot",
    "2:00 PM – 4:00 PM or 5:00 PM – 7:00 PM IST",
    "2-hour free intro masterclass",
    "Live Online",
    "Certificate of completion",
    "Limited seats",
  ],
} as const;

/** Bridge before registration — learning → believing → action (Issue 4). */
export const conversionBridge = {
  recap: ["AI Agents", "AI Workflows", "AI Companies"] as const,
  headline: "Now build your first AI Employee.",
} as const;

export const formMicrocopy = {
  helper: "We'll send your live access link to this email.",
  submit: "Reserve My Seat — Free",
  pending: "Reserving your seat…",
  successTitle: "You're in.",
  successBody:
    "Check your email for your live access link. Your certificate and career roadmap arrive after you complete the masterclass. See you at your chosen slot.",
  errorBody: "Something went wrong. Your details are still here — try again in a moment.",
} as const;

/** Final CTA urgency — emotional close, not a second form (Issue 5). */
export const finalCta = {
  eyebrow: "Last opportunity",
  urgency:
    "Seats are limited for every live slot. Pick your date and time before they fill.",
  ctaLabel: "Reserve My Seat — Free",
} as const;

/** FAQ transition intro (Issue 8). */
export const faqIntro = {
  eyebrow: "Still have questions?",
  title: "Everything you need to know before joining.",
  description: "Straight answers — no filler.",
} as const;
