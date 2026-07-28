/**
 * "What you will see" — free 2-hour intro outcomes.
 * Maps to the session flow: foundations → AI APIs → first AI agent.
 */

export interface BuildItem {
  id: string;
  name: string;
  outcome: string;
}

export const whatYouBuild: readonly BuildItem[] = [
  {
    id: "ai-foundations",
    name: "AI Foundations",
    outcome:
      "A clear, simple explanation of AI, language models, and agents — so you know what you are building before you start.",
  },
  {
    id: "free-apis",
    name: "AI APIs",
    outcome:
      "Hands-on setup with AI APIs. Get your keys, send requests, and see real responses during the session.",
  },
  {
    id: "first-ai-agent",
    name: "Your First AI Agent",
    outcome:
      "Build your first working AI agent live — no coding required. Your introduction to AI Agents & Automation.",
  },
] as const;
