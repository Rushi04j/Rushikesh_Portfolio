export interface ThinkingStage {
  step: number;
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  keyActions: string[];
  sampleQuestions: string[];
  takeaway: string;
}

export const howIThinkStages: ThinkingStage[] = [
  {
    step: 1,
    id: "listen",
    title: "Listen",
    eyebrow: "Stage 01 · First Instinct",
    summary:
      "Understand the situation from the person's perspective before jumping to technical answers or product pitches.",
    keyActions: [
      "Hear out their current day-to-day workflow without interrupting with features",
      "Pay attention to emotional points: friction, frustration, repetitive work, or delivery pressure",
      "Resist the urge to pitch early; respect what they have already built or tried",
    ],
    sampleQuestions: [
      "What does your team spend the most time wrestling with every sprint?",
      "Where does the process usually slow down or generate friction?",
    ],
    takeaway:
      "Listening uncovers what actually hurts, rather than what an external checklist assumes.",
  },
  {
    step: 2,
    id: "ask",
    title: "Ask",
    eyebrow: "Stage 02 · Discovery & Context",
    summary:
      "Ask questions about the current process, tools, constraints, and the expected business outcome.",
    keyActions: [
      "Map out existing tools (e.g., in-house test frameworks, CI/CD pipelines, issue trackers)",
      "Understand team makeup: manual QA, SDETs, developers, or business analysts",
      "Clarify constraints: timelines, budget, migration resistance, and security policies",
    ],
    sampleQuestions: [
      "What is already working well that you don't want to disrupt?",
      "If this issue were solved tomorrow, what measurable change would the team see?",
    ],
    takeaway:
      "Good questions separate superficial feature requests from underlying business requirements.",
  },
  {
    step: 3,
    id: "connect",
    title: "Connect",
    eyebrow: "Stage 03 · Solution Fit",
    summary:
      "Identify relevant product capabilities or possible approaches and explain clearly why they may fit.",
    keyActions: [
      "Map specific pain points directly to relevant platform capabilities",
      "Translate technical concepts into clear, plain language that business stakeholders understand",
      "Show how tools can complement or integrate with existing setups instead of forcing rip-and-replace",
    ],
    sampleQuestions: [
      "How would this capability plug into your existing pull-request or deployment flow?",
      "Which specific use cases should we walk through in a demo to test this thesis?",
    ],
    takeaway:
      "Connecting the dots turns an abstract product capability into a relevant, practical answer.",
  },
  {
    step: 4,
    id: "evaluate",
    title: "Evaluate",
    eyebrow: "Stage 04 · Trade-offs & Next Steps",
    summary:
      "Discuss fit honestly: limitations, trade-offs, learning curves, and reasonable next steps.",
    keyActions: [
      "Acknowledge where the product might NOT be the right fit or where alternatives make more sense",
      "Be transparent about effort required for setup, maintenance, and user adoption",
      "Agree on pragmatic next steps (e.g., targeted demo, technical discovery, or staying with the current setup)",
    ],
    sampleQuestions: [
      "What would have to be proven in a demo or POC for this to be worth your team's time?",
      "Are there trade-offs in maintenance or workflow that we should address upfront?",
    ],
    takeaway:
      "Honest evaluation builds lasting trust, even if the honest recommendation is not to purchase.",
  },
];

export const howIThinkPrinciples = [
  {
    title: "Problem First, Features Second",
    description:
      "A solution isn't useful simply because it has more features. It has to address a problem that actually matters to the person or business using it.",
  },
  {
    title: "Respect Existing Investments",
    description:
      "Engineering teams have spent months or years building their current tooling. A consultant must understand what works before suggesting anything new.",
  },
  {
    title: "Clarity Over Jargon",
    description:
      "If a technical concept can't be explained simply, it hasn't been understood deeply enough. Plain language enables better business decisions.",
  },
  {
    title: "Curiosity As a Habit",
    description:
      "Every conversation is an opportunity to learn how different engineering and business teams operate, solve problems, and make software.",
  },
];
