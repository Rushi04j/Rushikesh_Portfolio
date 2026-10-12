export interface IdeaNote {
  id: string;
  title: string;
  topic: string;
  status: "Working Draft" | "Idea Note" | "Published Note";
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
}

export const ideaNotes: IdeaNote[] = [
  {
    id: "demo-starts-before-product",
    title: "A Good Product Demo Starts Before You Open the Product",
    topic: "Pre-Sales & Product Demonstration",
    status: "Working Draft",
    date: "October 2026",
    readTime: "3 min read",
    summary:
      "Why the first ten minutes of discovery matter more than clicking through twenty feature menus.",
    content: [
      "When someone agrees to a product demo, it is tempting to jump straight into screen sharing and walk through every tab, dropdown, and dashboard widget. After all, the platform has so many features, and you want to show what it can do.",
      "Over time in customer conversations, I've realized that doing this often loses people. A prospect isn't looking for a tour of software architecture—they are sitting there with a specific frustration they deal with every week.",
      "A much better conversation begins before opening the application at all. Spend the first five to ten minutes asking how they do things today: What framework are they on? Who actually writes the tests? Where does the build break? What takes up too much time?",
      "Once you know the answer to those questions, the demo transforms from a generic feature walkthrough into a focused response. You don't need to show twenty things; you show the two or three capabilities that directly speak to their problem.",
      "The goal of a demonstration isn't to prove that the software is complicated or vast. It's to help the other person see clearly whether it makes their work simpler.",
    ],
    keyTakeaway:
      "A product demo is not a feature parade; it is a live answer to a specific problem uncovered in discovery.",
  },
  {
    id: "playwright-or-dedicated-platform",
    title: "Playwright or a Dedicated Testing Platform? Questions to Ask Before Choosing",
    topic: "Test Automation & Tooling",
    status: "Working Draft",
    date: "October 2026",
    readTime: "4 min read",
    summary:
      "Balancing the elegance of open-source code with the reality of long-term script maintenance and team skill sets.",
    content: [
      "In modern QA discussions, Playwright comes up constantly—and for good reason. It is fast, well-architected, developer-friendly, and has excellent cross-browser support. Many engineering teams love it because it feels natural to developers.",
      "Yet, many teams with Playwright still struggle with test coverage. Why does this happen if the tool is so capable?",
      "The answer usually comes down to maintenance and people. Writing test scripts is only the first part; keeping them reliable as the application UI evolves requires dedicated engineering bandwidth. When developers are pressured to ship new features, test maintenance often slips.",
      "Furthermore, if a company has a dedicated team of manual QA specialists or domain testers who understand business workflows but don't write TypeScript or Python, code-only frameworks create a bottleneck where only a few engineers can automate tests.",
      "Before deciding whether to stick purely with code or add a testing platform, a team needs to ask: Who will write and maintain these tests in six months? Is our bottleneck test execution, or is it the human time required to update locators and manage test suites?",
    ],
    keyTakeaway:
      "Great tooling is about team alignment. An open-source framework and a dedicated platform serve different team dynamics—the right choice depends on who maintains the tests.",
  },
  {
    id: "what-makes-ai-feature-useful",
    title: "What Makes an AI Feature Useful to a Business?",
    topic: "AI Capabilities & Practical Utility",
    status: "Idea Note",
    date: "October 2026",
    readTime: "3 min read",
    summary:
      "Looking past prompt buzzwords to understand what genuinely saves engineering hours in test automation.",
    content: [
      "Almost every SaaS tool today has added an 'AI' badge somewhere on its navigation bar. During customer discussions, prospects are often skeptical because they've seen too many demos that look magical on a mock page but fail in real enterprise workflows.",
      "What actually separates a novelty AI feature from something a QA team relies on every day?",
      "First, predictability. In software testing, determinism is non-negotiable. If an AI generates non-deterministic test steps or hallucinates assertion conditions, it creates more flaky tests than it solves.",
      "Second, recovery rather than generation. While AI test generation gets a lot of marketing attention, test maintenance is where engineering hours are actually lost. An AI capability that can dynamically analyze a failed test, recognize that a button's CSS selector changed slightly, and self-heal the locator without failing the CI build provides immediate, measurable ROI.",
      "Third, transparency. Engineers want to see what the AI did and have the power to easily modify or override it. When AI assists rather than obscures, businesses are eager to adopt it.",
    ],
    keyTakeaway:
      "In testing, AI is most valuable when it silently eliminates repetitive maintenance headaches rather than attempting to replace human judgment.",
  },
  {
    id: "understanding-problems-before-solutions",
    title: "How I Think About Customer Problems Before Suggesting a Solution",
    topic: "Consultative Mindset & Communication",
    status: "Working Draft",
    date: "October 2026",
    readTime: "3 min read",
    summary:
      "Why listening first, asking thoughtful questions, and resisting the urge to jump to conclusions creates better outcomes.",
    content: [
      "Growing up, whenever friends came to me with problems, I learned early that giving quick advice usually backfires. People rarely need someone to tell them what to do within the first thirty seconds; they need someone to listen, understand the context, and help them untangle what's actually happening.",
      "I was surprised to discover how similar this is to technical solution consulting. When a prospect mentions they have an automation challenge, it is easy to assume they need whatever feature you happen to sell.",
      "But if you slow down and ask: 'How does your team currently handle regression testing?' or 'What happens when a release gets delayed?', the real constraint emerges. Sometimes the issue isn't software at all—it's communication between developers and QA, or an unstable staging environment.",
      "By understanding the root problem first, you earn the right to recommend a solution. And if your product isn't the right answer, saying so honestly builds far more credibility than trying to fit a square peg into a round hole.",
    ],
    keyTakeaway:
      "Consulting isn't about having all the answers—it's about having the patience and curiosity to ask the right questions first.",
  },
];
