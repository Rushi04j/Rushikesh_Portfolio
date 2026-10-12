export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  context: string;
  customerChallenge: string;
  myApproach: string;
  reasoning: string;
  discoveryQuestions?: string[];
  reportedOutcome: string;
  whatILearned: string;
  whatIWouldInvestigateNext: string;
  demonstratedSkills: string[];
}

export const caseStudies: CaseStudyItem[] = [
  {
    id: "ai-in-context",
    title: "Explaining AI Features in Context",
    category: "Customer Conversation · Product Positioning",
    tagline: "Navigating AI tool confusion by connecting capabilities to specific testing workflows rather than generic hype.",
    context:
      "During a customer conversation, a prospective customer asked me to explain the AI capabilities available in our platform. After I explained them, she said she understood the features but found the AI landscape complex and mentioned that her team was already using Cursor AI for coding.",
    customerChallenge:
      "The prospect felt overwhelmed by overlapping AI terminology and was unsure why a dedicated testing platform's AI capabilities mattered if developers were already using an AI code editor like Cursor.",
    myApproach:
      "I treated that as an opportunity to clarify the difference between the tools rather than dismissing the product she was already using. I explained that different tools serve different purposes: AI developer editors help engineers write application code faster, whereas our platform's AI capabilities focus on test generation, element locators, self-healing, and end-to-end regression workflows. I then connected our platform's relevant capabilities directly to the testing workflow and use case we were discussing.",
    reasoning:
      "Dismissing existing tools alienates prospects and damages credibility. Acknowledging good tools and defining exact boundaries helps buyers see clear operational utility rather than duplicative spending.",
    reportedOutcome:
      "The conversation progressed naturally to a scheduled product demonstration focused on test automation workflows.",
    whatILearned:
      "When buyers raise alternative AI tools, they are rarely objecting to the platform—they are asking for clear positioning to justify why another tool is worth considering in their stack.",
    whatIWouldInvestigateNext:
      "How teams evaluate total cost of ownership and engineering hours saved when combining AI code assistants with dedicated AI test automation platforms.",
    demonstratedSkills: [
      "Active Listening",
      "Objective Tool Positioning",
      "Workflow-Centric Explanation",
      "Consultative Engagement",
    ],
  },
  {
    id: "playwright-vs-platform",
    title: "Playwright vs. an Additional Testing Platform",
    category: "Technical Discovery · Automation",
    tagline: "Approaching code-first framework comparisons with technical respect, objective trade-offs, and discovery questions.",
    context:
      "A prospect asked a direct, practical question: if their engineering team already had an active Playwright automation setup, why should they consider evaluating another testing platform?",
    customerChallenge:
      "Engineering teams with existing investments in Playwright are naturally cautious about adding new software unless it addresses clear bottlenecks that code-alone frameworks struggle with.",
    myApproach:
      "I recognized that the customer already had a functioning testing approach in place. Instead of assuming they needed to replace it, I acknowledged Playwright as a powerful, modern automation framework. I then asked discovery questions to explore whether their challenges were with execution speed, script maintenance, non-technical team collaboration, reporting, or cross-environment scale—and explained how a dedicated platform could complement or offer distinct value only if those specific needs existed.",
    reasoning:
      "Playwright is an exceptional open-source tool. If an engineering team has dedicated SDET bandwidth and manageable test suites, they may have zero need for an additional platform. Genuine consulting means helping them discover if unmet needs exist, rather than pushing an unnecessary replacement.",
    discoveryQuestions: [
      "What is the team already automating with Playwright, and what is working well?",
      "Are non-technical team members (manual QA, product managers) able to contribute to test creation?",
      "How much sprint capacity is spent updating element locators and maintaining test suites as the UI evolves?",
      "What requirements, if any, remain unmet around execution analytics, dashboards, or cross-browser coverage?",
      "Would an additional platform genuinely complement the workflow, or would it introduce unnecessary tool sprawl?",
    ],
    reportedOutcome:
      "Solution-fit discussion and collaborative discovery on the balance between code-first scripts and platform-driven test maintenance.",
    whatILearned:
      "Pre-sales is not about convincing everyone to buy; it is about rigorous qualification. Respecting an existing framework builds mutual respect and quickly surfaces whether a real problem exists.",
    whatIWouldInvestigateNext:
      "Deeper exploration of hybrid QA teams where developers write Playwright unit/integration tests while QA engineers manage end-to-end regression suites on an enterprise platform.",
    demonstratedSkills: [
      "Technical Discovery",
      "Trade-Off Analysis",
      "Respect for Developer Tooling",
      "Solution-Fit Qualification",
    ],
  },
  {
    id: "relationship-beyond-pitch",
    title: "Building a Relationship Beyond the Initial Pitch",
    category: "Relationship Building · Customer Engagement",
    tagline: "Prioritizing genuine human helpfulness and long-term connections over transactional one-off pitches.",
    context:
      "I spoke with someone I connected with who was not currently working in the specific industry or role we were discussing for our SaaS solution.",
    customerChallenge:
      "There was no immediate commercial or product fit, and conventional sales playbooks would have marked the lead as inactive or closed.",
    myApproach:
      "Instead of keeping every conversation strictly limited to a product pitch or terminating contact, I focused on building a genuine professional relationship. I listened to his background, stayed in touch periodically, and shared relevant industry hiring posts that I came across during my regular market research.",
    reasoning:
      "Professional networking is fundamentally about people, not immediate quotas. Sharing helpful information costs nothing, supports someone in their career journey, and establishes lasting goodwill.",
    reportedOutcome:
      "He later informed me that he had secured a job and reconnected to share his appreciation, establishing an ongoing, trusted professional connection.",
    whatILearned:
      "Every conversation is between two people. When you bring genuine curiosity and helpfulness, you build a reputation that extends far beyond individual transactions.",
    whatIWouldInvestigateNext:
      "How community-led growth and authentic relationships create long-term enterprise advocates as professionals move between organizations.",
    demonstratedSkills: [
      "Long-term Relationship Building",
      "Empathetic Follow-Up",
      "Professional Integrity",
      "Value-First Mindset",
    ],
  },
];
