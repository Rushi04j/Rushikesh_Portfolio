export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "full-time" | "internship" | "training" | "education";
  period: string;
  startDate?: string;
  location?: string;
  description: string;
  highlights?: string[];
  note?: string;
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "fireflink-fulltime",
    role: "Associate Solution Consultant",
    organization: "FireFlink",
    type: "full-time",
    period: "August 17, 2026 – Present",
    startDate: "2026-08-17",
    location: "Bengaluru, India (Work involving US customers)",
    description:
      "I work with FireFlink's SaaS testing and automation platform, engaging with prospective customers and explaining how the product may fit their needs.",
    highlights: [
      "Prospect research and customer outreach across target accounts",
      "Engaging prospective clients via LinkedIn, email, and discovery calls",
      "Understanding initial customer testing setups, workflows, and challenges",
      "Independently conducting product demonstrations and use-case walkthroughs",
      "Explaining relevant product capabilities, including AI-assisted test automation features",
      "Systematic follow-up to explore solution fit and requirements",
      "Participating in channel-partnership demonstrations",
      "Contributing to POC-related activities in close collaboration with internal technical teams",
    ],
    skills: [
      "SaaS Product Demos",
      "Customer Discovery",
      "Software Testing Concepts",
      "AI-Assisted Testing",
      "POC Support",
      "Pre-Sales Outreach",
    ],
  },
  {
    id: "fireflink-intern",
    role: "Solution Consultant Intern",
    organization: "FireFlink",
    type: "internship",
    period: "June 2026 – August 2026",
    startDate: "2026-06",
    location: "Bengaluru, India",
    description:
      "During my internship, I went through product and sales training, learned the fundamentals of SDLC and software testing, and gained familiarity with the FireFlink product. I subsequently joined the US-facing team and transitioned to a full-time role.",
    highlights: [
      "Completed foundational training on FireFlink test automation capabilities",
      "Studied software development lifecycle (SDLC) and QA methodologies",
      "Shadowed customer discussions and learned structured discovery techniques",
      "Transitioned to full-time Associate Solution Consultant on August 17, 2026",
    ],
    skills: ["SDLC Fundamentals", "Test Automation Basics", "Solution Consulting Onboarding"],
  },
  {
    id: "qspiders-training",
    role: "Java Full-Stack Training",
    organization: "QSpiders",
    type: "training",
    period: "Post-College Placement Training",
    location: "Hyderabad, India",
    description:
      "Selected through campus placement, I attended Java full-stack training and covered foundational Java, HTML, CSS, and SQL. I did not complete the full course, and my JavaScript training remained incomplete.",
    note: "Vocational training program; non-certified completion.",
    highlights: [
      "Covered core Java principles (object-oriented programming, classes, methods)",
      "Studied frontend foundations with HTML & CSS",
      "Practiced SQL queries, relational tables, and basic database design",
      "Recognized that my core strength lay in explaining and connecting technology rather than pure back-end development",
    ],
    skills: ["Java Fundamentals", "SQL Basics", "HTML/CSS"],
  },
  {
    id: "zidio-intern",
    role: "Frontend / Web Development Intern",
    organization: "Zidio Development",
    type: "internship",
    period: "Approximately 3 Months (College Internship)",
    location: "Remote",
    description:
      "A short remote internship focused on web development exposure during my college journey, working with frontend basics and learning how web applications are put together.",
    highlights: [
      "Gained hands-on familiarity with web page structuring and UI elements",
      "Explored responsive layouts and browser developer tools",
      "Learned the discipline of working within a remote team environment",
    ],
    skills: ["HTML", "CSS", "Web Development Fundamentals"],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  score: string;
  period?: string;
  details?: string;
}

export const educationList: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Nagpur Institute of Technology",
    location: "Nagpur, Maharashtra",
    score: "Aggregate: ~8.04 / 10",
    details:
      "Studied core computer science subjects including algorithms, data structures, database management systems, operating systems, and computer networks. Explored programming and web technologies.",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Junior College (Maharashtra State Board)", // Configurable exact name
    location: "Nagpur, Maharashtra",
    score: "79%",
    details: "Science stream with mathematics and computer science foundation.",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC - 10th)",
    institution: "Somalwar High School",
    location: "Nagpur, Maharashtra",
    score: "92%",
    details: "Strong academic foundation in science, mathematics, and languages.",
  },
];
