/**
 * 4-week "AI Agents & Automation" program — syllabus summary.
 * The free 2-hour masterclass is the introduction / gateway to this program.
 * Source of truth for program messaging; do not invent days beyond this list.
 */

export const aiAgentsProgram = {
  name: "AI Agents & Automation",
  brand: "NeuralVarsity",
  durationWeeks: 4,
  sessionHours: 4,
  description:
    "A 4-week program covering AI foundations, agentic systems, RAG, automation, AI apps, and production agents — 20 live days in total.",
} as const;

export interface ProgramDay {
  day: number;
  title: string;
  topics: string;
}

export interface ProgramWeek {
  week: number;
  title: string;
  days: readonly ProgramDay[];
}

export const aiAgentsProgramWeeks: readonly ProgramWeek[] = [
  {
    week: 1,
    title: "AI Foundations, Prompt Engineering & MCP",
    days: [
      {
        day: 1,
        title: "Intro to AI & Evolution of AI",
        topics:
          "AI Timeline 1950–2026, key researchers, LLM ecosystem, open-source vs proprietary, Git & GitHub fundamentals, LinkedIn optimization",
      },
      {
        day: 2,
        title: "Prompt Engineering",
        topics:
          "Zero/one/few-shot, role, persona, structured, reasoning, CoD; Whisper Flow AI; AI ethics, safety, and hallucinations",
      },
      {
        day: 3,
        title: "API Fundamentals & AI APIs",
        topics:
          "API fundamentals; Groq, Gemini, OpenRouter, Cohere, HuggingFace; sandbox environment; token optimization; context engineering",
      },
      {
        day: 4,
        title: "Model Context Protocol (MCP)",
        topics: "MCP architecture; Claude Desktop + MCP setup",
      },
      {
        day: 5,
        title: "Mini Project 1",
        topics: "First AI agent workflow combining prompt engineering, APIs, and MCP",
      },
    ],
  },
  {
    week: 2,
    title: "Agentic AI, RAG & Intelligent Automation",
    days: [
      {
        day: 1,
        title: "Agentic AI Concepts",
        topics:
          "Agent loop, context & memory, agent architecture, multi-agent systems, guardrails, automation concepts",
      },
      {
        day: 2,
        title: "No-code AI Agent Platforms",
        topics: "Dify, n8n, CrewAI, Zapier; workflow builders",
      },
      {
        day: 3,
        title: "RAG Full Pipeline",
        topics:
          "Ingestion, chunking, embeddings, vector DBs, retrieval, generation; modern RAG variants",
      },
      {
        day: 4,
        title: "Production RAG Project",
        topics: "Enterprise-grade RAG systems",
      },
      {
        day: 5,
        title: "End-to-end Intelligent Automation",
        topics: "Combining RAG + APIs + LLMs + workflows",
      },
    ],
  },
  {
    week: 3,
    title: "AI Content Creation, Automation & App Development",
    days: [
      {
        day: 1,
        title: "AI UGC Creation",
        topics:
          "Scripts, avatars, voice, video, editing, platform optimization, ethics",
      },
      {
        day: 2,
        title: "AI UGC Automation Pipelines",
        topics: "Pipelines using Dify / n8n / Zapier / CrewAI",
      },
      {
        day: 3,
        title: "AI App Builders",
        topics:
          "Lovable, Bolt, Replit AI, v0, Cursor; prompt-to-app; full-stack AI development",
      },
      {
        day: 4,
        title: "Mini Project 3",
        topics: "Build first AI application using Lovable",
      },
      {
        day: 5,
        title: "Major Project",
        topics: "AI application + automation integration (Dify / n8n / Zapier / CrewAI)",
      },
    ],
  },
  {
    week: 4,
    title: "OpenClaw, Production AI Agents & Enterprise Integrations",
    days: [
      {
        day: 1,
        title: "OpenClaw Foundations",
        topics:
          "Agent configuration, LLM/API config, Telegram / Discord / AgentMail channels",
      },
      {
        day: 2,
        title: "OpenClaw Workspace & Agent Identity",
        topics:
          "SOUL.md, IDENTITY.md, personality design, memory management",
      },
      {
        day: 3,
        title: "OpenClaw Skills & Automation",
        topics: "Skills, browser automation, cron jobs, heartbeat jobs, scheduling",
      },
      {
        day: 4,
        title: "Security & MCP Integration",
        topics:
          "Bitwarden, secrets management, Zapier MCP, production best practices",
      },
      {
        day: 5,
        title: "Major Project — Production AI Agent",
        topics: "Full enterprise-ready agent with OpenClaw",
      },
    ],
  },
] as const;
