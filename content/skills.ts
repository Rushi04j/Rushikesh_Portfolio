export interface SkillCategory {
  id: string;
  categoryTitle: string;
  description: string;
  skills: {
    name: string;
    stage: "Core Strength" | "Foundational Understanding" | "Practicing" | "Building Hands-On Experience";
    context?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "consulting-communication",
    categoryTitle: "Current Professional Strengths",
    description:
      "Skills actively applied in daily pre-sales interactions, discovery conversations, and SaaS demonstrations.",
    skills: [
      {
        name: "Product Demonstrations",
        stage: "Core Strength",
        context: "Conducting walk-throughs aligned with customer use cases",
      },
      {
        name: "Customer Communication & Listening",
        stage: "Core Strength",
        context: "Active listening, clarifying needs, and conversational clarity",
      },
      {
        name: "Prospect Research & Engagement",
        stage: "Core Strength",
        context: "Engaging target accounts across LinkedIn, email, and phone",
      },
      {
        name: "Understanding Initial Customer Requirements",
        stage: "Core Strength",
        context: "Mapping initial QA bottlenecks and workflow constraints",
      },
      {
        name: "Product Capability Explanation",
        stage: "Core Strength",
        context: "Translating features and AI capabilities into tangible value",
      },
      {
        name: "Professional Follow-Up & Relationship Care",
        stage: "Core Strength",
        context: "Consistent, value-first touchpoints and clear next steps",
      },
      {
        name: "Structured Problem Discussions",
        stage: "Core Strength",
        context: "Breaking down complex questions into practical discovery points",
      },
      {
        name: "Foundational Software Testing & SDLC",
        stage: "Core Strength",
        context: "Familiarity with QA lifecycle, sprint cycles, and regression flows",
      },
    ],
  },
  {
    id: "technical-foundations",
    categoryTitle: "Technical Foundations",
    description:
      "Core computer science concepts, programming fundamentals, and foundational web technologies studied and applied.",
    skills: [
      {
        name: "Java Fundamentals",
        stage: "Foundational Understanding",
        context: "OOP principles, basic syntax, and data structures (College & QSpiders)",
      },
      {
        name: "HTML & CSS Fundamentals",
        stage: "Foundational Understanding",
        context: "Document structure, styling basics, and responsive layout concepts",
      },
      {
        name: "SQL Fundamentals",
        stage: "Foundational Understanding",
        context: "Relational tables, basic SELECT queries, and join concepts",
      },
      {
        name: "REST API Concepts",
        stage: "Foundational Understanding",
        context: "HTTP verbs (GET, POST, PUT, DELETE), endpoints, and JSON structures",
      },
      {
        name: "Software Testing Concepts",
        stage: "Foundational Understanding",
        context: "Manual QA, functional testing, regression, test cases, and bug lifecycle",
      },
      {
        name: "Test Automation Concepts",
        stage: "Foundational Understanding",
        context: "Script vs. scriptless automation, locators, execution, and CI basics",
      },
    ],
  },
  {
    id: "developing-skills",
    categoryTitle: "Developing Skills & Learning Path",
    description:
      "Areas currently under deliberate self-study and practice to build technical depth for Solution Engineering.",
    skills: [
      {
        name: "API Testing with Postman",
        stage: "Practicing",
        context: "Writing test assertions, managing environments, and collection runs",
      },
      {
        name: "Practical SQL",
        stage: "Practicing",
        context: "Querying realistic database schemas and analyzing test result sets",
      },
      {
        name: "Automation Frameworks (Playwright concepts)",
        stage: "Building Hands-On Experience",
        context: "Understanding architecture, selectors, and script execution flows",
      },
      {
        name: "Integrations & Webhook Troubleshooting",
        stage: "Building Hands-On Experience",
        context: "Exploring how testing platforms connect with CI/CD and Jira",
      },
      {
        name: "Technical Discovery & Solution Design",
        stage: "Practicing",
        context: "Translating complex customer architectural constraints into solution proposals",
      },
      {
        name: "Cloud & Infrastructure Basics",
        stage: "Building Hands-On Experience",
        context: "Foundations of cloud deployment environments and test runners",
      },
      {
        name: "AI-Enabled Testing Workflows",
        stage: "Practicing",
        context: "Exploring practical applications of self-healing and AI assertions",
      },
    ],
  },
];
