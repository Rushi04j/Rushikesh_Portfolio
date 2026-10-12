export type ProjectStatus = "Planned" | "In Progress" | "Completed";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  statusLabel?: string;
  description: string;
  problemAddressed: string;
  workPerformed: string;
  learningOutcomes: string;
  toolsUsed: string[];
  repoUrl?: string;       // Keep empty or undefined if not available
  demoUrl?: string;       // Keep empty or undefined if not available
  caseStudyUrl?: string;  // Keep empty or undefined if not available
  thumbnail?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "api-testing-practice",
    title: "API Testing & Automation Practice",
    category: "Technical Foundation",
    status: "In Progress",
    statusLabel: "Active Hands-on Learning",
    description:
      "A structured technical learning initiative focused on REST API fundamentals, request/response verification, status code validations, and automated collection runs using Postman.",
    problemAddressed:
      "Modern SaaS test automation frequently requires going beyond UI elements to validate underlying APIs, auth tokens, webhooks, and backend services.",
    workPerformed:
      "Practicing HTTP methods (GET, POST, PUT, DELETE), setting up environment variables, writing basic JavaScript response assertions in Postman, and testing mock JSON endpoints.",
    learningOutcomes:
      "Deepening practical comfort with API payloads, status code significance, error responses, and the technical mechanics of data transfer between microservices.",
    toolsUsed: ["Postman", "REST APIs", "JSON", "JavaScript Assertions (Basic)"],
    // Real URLs can be added below as the repository/documentation is published
    repoUrl: "",
    demoUrl: "",
    caseStudyUrl: "",
  },
  {
    id: "customer-discovery-framework",
    title: "SaaS Customer Discovery Framework",
    category: "Pre-Sales & Methodology",
    status: "Completed",
    statusLabel: "Personal Learning Project",
    description:
      "A structured template and question bank designed to guide early technical discovery conversations for software testing and QA tooling.",
    problemAddressed:
      "Unprepared discovery calls often turn into generic product feature walkthroughs rather than diagnostic investigations into actual customer bottlenecks.",
    workPerformed:
      "Developed a four-stage question matrix (Current Process, Tooling Stack, Team Capacity, Desired Outcomes) that helps consultants qualify testing pain points before launching a demonstration.",
    learningOutcomes:
      "Learned how to frame neutral, non-leading questions that encourage prospects to share authentic organizational constraints and evaluation criteria.",
    toolsUsed: ["Discovery Frameworks", "B2B SaaS Methodology", "Pre-Sales Strategy"],
    repoUrl: "",
    demoUrl: "",
    caseStudyUrl: "",
  },
  {
    id: "saas-solution-evaluation",
    title: "SaaS Testing Tool Evaluation Model",
    category: "Business & Architecture",
    status: "Planned",
    statusLabel: "Conceptual Case Study",
    description:
      "A comparative evaluation model analyzing the trade-offs between open-source code-first frameworks (Playwright/Selenium) and codeless/AI-driven SaaS platforms.",
    problemAddressed:
      "Buyers frequently struggle to weigh initial license fees against the long-term engineering cost of maintaining open-source automation code.",
    workPerformed:
      "Drafting an objective rubric analyzing Total Cost of Ownership (TCO), onboarding curves for non-technical team members, CI/CD integration complexity, and test maintenance overhead.",
    learningOutcomes:
      "Formulating a holistic business and technical perspective that helps prospects evaluate their real needs without dogmatic bias toward any single approach.",
    toolsUsed: ["TCO Modeling", "Solution Design", "Competitive Analysis"],
    repoUrl: "",
    demoUrl: "",
    caseStudyUrl: "",
  },
];
