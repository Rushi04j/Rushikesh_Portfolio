export interface ThinkingQuestion {
  id: string;
  question: string;
  category: string;
  context: string;
  questionsToAsk: string[];
  evidenceToGather: string[];
  potentialTradeOffs: string[];
  whatWouldChangeRecommendation: string;
}

export const thinkingQuestions: ThinkingQuestion[] = [
  {
    id: "when-to-adopt-new-tool",
    question:
      "When does a company actually need a new testing platform, and when is its existing setup sufficient?",
    category: "Tooling & Architecture",
    context:
      "It is common for teams to feel dissatisfied with test automation, but buying new software does not automatically solve broken processes or poor test design. Distinguishing tooling gaps from workflow gaps is the most critical first step.",
    questionsToAsk: [
      "Is the current bottleneck in test creation speed, script maintenance, test environment stability, or skill set gaps?",
      "How many hours per sprint does the engineering team currently spend debugging flaky tests versus building features?",
      "Can the existing framework (e.g., Playwright, Cypress) handle the required scope if the team is upskilled or provided better infrastructure?",
    ],
    evidenceToGather: [
      "Flaky test rates over the last 90 days",
      "Average time required to author a new automated regression suite",
      "Ratio of manual QA testers to software engineers in test (SDETs)",
      "Current infrastructure and test run execution costs",
    ],
    potentialTradeOffs: [
      "Adopting a new platform incurs onboarding overhead, license costs, and potential vendor lock-in",
      "Staying with the existing setup preserves code ownership and customization, but may drain senior developer time on repetitive maintenance",
    ],
    whatWouldChangeRecommendation:
      "If the team has strong full-time SDETs and high developer involvement in test writing, staying with their code-first framework is usually superior. If manual QA testers need to automate tests independently without writing code, a dedicated platform becomes high value.",
  },
  {
    id: "explaining-complex-products",
    question:
      "How can we explain a complex technical product in a way that makes sense to the business using it?",
    category: "Communication & Value",
    context:
      "Technical pre-sales often gets trapped in technical specifications—discussing locators, thread counts, or architecture—while the economic buyer is asking: 'Will this shorten our release cycle and reduce customer bugs?'",
    questionsToAsk: [
      "Who is in the room: engineers, QA managers, VP of Product, or commercial stakeholders?",
      "What language does the buyer's organization naturally use to define success?",
      "Which single workflow or pain point convinced them to take this call in the first place?",
    ],
    evidenceToGather: [
      "The customer's current release frequency and escaped bug metrics",
      "Common friction points mentioned in early discovery",
      "Examples of how previous software purchases were justified internally",
    ],
    potentialTradeOffs: [
      "Oversimplifying can leave technical evaluators feeling that the product lacks architectural depth",
      "Over-indexing on technical mechanics loses the business executive responsible for sign-off",
    ],
    whatWouldChangeRecommendation:
      "Tailor the narrative to the stakeholder: ground technical details in business outcomes (e.g., connect automated locator healing to 'fewer failed builds blocking production deployment').",
  },
  {
    id: "meaningful-ai-vs-demo-hype",
    question:
      "What makes an AI feature genuinely useful rather than simply impressive in a demo?",
    category: "AI & Product Reality",
    context:
      "Many AI demonstrations look impressive when run on simple, pristine toy applications. In real production enterprise software with dynamic iframes, custom shadow DOMs, and shifting permissions, AI often behaves differently.",
    questionsToAsk: [
      "Does the AI feature solve a routine daily task that humans find tedious, or is it solving a rare problem?",
      "What happens when the AI is wrong—how easy is it for an engineer to review, modify, or override the suggestion?",
      "Does using the AI feature require more prompt crafting and debugging than simply writing the step manually?",
    ],
    evidenceToGather: [
      "Accuracy and recovery rate in dynamic, real-world application environments",
      "User override percentage during everyday test execution",
      "Measurable time saved during authoring and test maintenance cycles",
    ],
    potentialTradeOffs: [
      "Heavily autonomous features can obscure visibility and create unpredictable test runs",
      "Conservative, rule-based features feel less 'magic' but offer the determinism that enterprise QA teams require",
    ],
    whatWouldChangeRecommendation:
      "An AI feature is genuinely valuable if it reduces ongoing test maintenance (e.g., self-healing locators that adapt to minor UI changes without breaking a CI pipeline) rather than just generating superficial boilerplate.",
  },
  {
    id: "evaluating-tco-and-value",
    question:
      "How should a business evaluate implementation effort, cost, maintainability, and expected value before adopting a tool?",
    category: "Business Evaluation",
    context:
      "Software license price is typically only 20-30% of the true cost of ownership. The larger hidden costs are implementation time, training curves, test migration, and ongoing maintenance.",
    questionsToAsk: [
      "What is the actual cost of engineer hours currently spent maintaining existing tests?",
      "How long will it take for the team to achieve parity with their existing test coverage in the new platform?",
      "What are the ongoing support, training, and maintenance requirements post-onboarding?",
    ],
    evidenceToGather: [
      "Vendor implementation timeline estimates compared to historical onboarding averages",
      "Internal engineering hourly rate applied to routine QA maintenance tasks",
      "Expected reduction in test cycle duration and faster time-to-market benefits",
    ],
    potentialTradeOffs: [
      "Low upfront SaaS fees can turn expensive if user seats scale rapidly or technical support is tier-restricted",
      "Zero-license open-source tools can turn expensive if three senior engineers spend 40% of their sprints maintaining infrastructure",
    ],
    whatWouldChangeRecommendation:
      "If the estimated engineering time saved over 12 months comfortably exceeds the tool's license and migration cost, the investment is justifiable. If the numbers don't show clear operational relief, the business is better off optimizing existing workflows.",
  },
];
