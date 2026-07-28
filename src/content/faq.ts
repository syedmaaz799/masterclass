/**
 * FAQ — real objections only (04-conversion). Each answer leads with reassurance.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: readonly FaqItem[] = [
  {
    id: "who-for",
    question: "Who is this masterclass designed for?",
    answer:
      "Anyone curious about AI agents — students, professionals, and founders who want a clear introduction before the full AI Agents & Automation program. Curiosity and a laptop are enough; prior build experience is not required.",
  },
  {
    id: "no-code",
    question: "Is programming experience required?",
    answer:
      "No. The session uses visual, no-code tools — the same approach teams use to ship workflows without writing application code. You focus on concepts and outcomes; the platform handles the syntax.",
  },
  {
    id: "beginner",
    question: "Can first-time builders keep pace?",
    answer:
      "Yes — deliberately so. We start with AI foundations, then AI APIs, then your first agent. If you can follow a live walkthrough on your machine, you have everything this session demands.",
  },
  {
    id: "recording",
    question: "Are sessions recorded for later viewing?",
    answer:
      "This is a live, interactive 2-hour session by design. The value is in building alongside the instructor and asking questions in real time. Plan to attend your chosen slot.",
  },
  {
    id: "joining-details",
    question: "How will I access the live session?",
    answer:
      "Immediately after registration. Your live access link arrives at the email you provide — keep it ready for your chosen date and time slot.",
  },
  {
    id: "tools",
    question: "Which tools and setup are required?",
    answer:
      "A laptop, reliable internet, and AI API accounts where required — we walk through setup during the session. No paid tools are required for this intro.",
  },
  {
    id: "is-it-free",
    question: "Is there a registration fee?",
    answer:
      "No. This introduction masterclass is completely free. Submit the form with your details and chosen slot — your seat is reserved immediately.",
  },
  {
    id: "full-program",
    question: "How does this relate to AI Agents & Automation?",
    answer:
      "This 2-hour masterclass is the free introduction. After it, you can enroll in NeuralVarsity's 4-week AI Agents & Automation program — foundations through production agents across 20 live days.",
  },
  {
    id: "refund",
    question: "Can I cancel my seat?",
    answer:
      "Yes. Email the address in the footer with your registration details if you need to cancel or change your slot — we handle the rest.",
  },
  {
    id: "after-register",
    question: "What happens once I reserve my seat?",
    answer:
      "A confirmation email with your live link lands within minutes. Arrive on time for your slot with your laptop ready — you will cover AI foundations, AI APIs, and build your first AI agent live.",
  },
  {
    id: "certificate",
    question: "Is a certificate of completion included?",
    answer:
      "Yes. Completing the session earns a certificate of completion — evidence that you built with agentic systems, not only watched demos.",
  },
  {
    id: "career-roadmap",
    question: "What does the complimentary career roadmap include?",
    answer:
      "After the masterclass, you receive a personalized career roadmap at no extra cost — a clear view of next skills, projects, and how the full AI Agents & Automation program fits your path.",
  },
] as const;
