/**
 * Free intro masterclass agenda — gateway to NeuralVarsity's
 * 4-week "AI Agents & Automation" program.
 * One live session · 2 hours · three outcomes.
 */

export interface AgendaHour {
  id: string;
  hour: string;
  title: string;
  /** What the attendee can DO by the end of this block. */
  outcome: string;
}

export const agendaSection = {
  eyebrow: "2-hour intro",
  title: "What you will learn in two hours",
  description:
    "A free live session. You will understand the basics of AI, work with AI APIs, and build your first AI agent. Book any day. This session introduces NeuralVarsity's AI Agents & Automation program.",
} as const;

export const agenda: readonly AgendaHour[] = [
  {
    id: "hour-1-foundations",
    hour: "Part 1",
    title: "AI Foundations",
    outcome:
      "Learn what AI is, how it has grown, and how language models work. Understand what an AI agent is — and how it differs from a simple chatbot.",
  },
  {
    id: "hour-1-apis",
    hour: "Part 2",
    title: "AI APIs",
    outcome:
      "Set up AI API keys and send your first requests live. See how models reply in real time — the same tools you will use to build your agent.",
  },
  {
    id: "hour-2-first-agent",
    hour: "Part 3",
    title: "Your First AI Agent",
    outcome:
      "Build and run your first AI agent during the session. No coding required. Leave with a working agent and a clear next step into the full program.",
  },
] as const;
