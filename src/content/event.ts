/**
 * Event facts — THE single source of truth (01-project).
 * Never duplicate date/time/price elsewhere; import from here.
 * All times are IST (Asia/Kolkata, UTC+05:30).
 */

export const event = {
  brand: "NeuralVarsity",
  series: "Agentic AI Masterclass",
  title: "Build Your First AI Employee",
  titleTagline: "Which works 24/7",
  subtitle:
    "Learn how to build AI Agents that automate real business tasks without writing code.",
  heroSubheadline:
    "Discover how to create AI Agents that generate leads, automate communication, and perform real business tasks without coding.",

  // Students pick their own session slot (see src/content/slots.ts):
  // any upcoming date, 2:00–4:00 PM or 5:00–7:00 PM IST.
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",

  durationHours: 2,
  mode: "Live Online Masterclass",

  compareAtPriceInINR: 4999,
  /** Offer price — 0 means Free (no checkout). */
  priceInINR: 0,

  schedule: {
    heroEyebrow: "Live Online Masterclass · Choose your slot",
    datePill: "Pick your date",
    timePill: "2:00 PM – 4:00 PM or 5:00 PM – 7:00 PM IST",
    footerDate: "Daily live sessions — choose your date",
    footerTime: "2:00 PM – 4:00 PM or 5:00 PM – 7:00 PM IST",
    durationLabel: "2-hour live session",
    finalCtaPriceSuffix: "· one live session · 2 hours · Free",
  },

  // Seats remaining is config-driven, never random (04-conversion).
  // Wire to real inventory in a later phase; this is the controlled fallback.
  seatsTotal: 500,
  seatsRemaining: 236,

  cta: {
    primary: "Reserve My Seat",
    /** Kept for older call sites; prefer `primary` for free registration. */
    primaryWithPrice: "Reserve My Seat",
    secondary: "Watch Demo",
  },
} as const;

export type EventData = typeof event;
