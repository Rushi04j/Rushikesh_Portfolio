export interface SiteConfig {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  // External URLs - leave empty string to gracefully hide links/buttons
  linkedinUrl: string;
  resumeUrl: string;
  githubUrl: string;
  twitterUrl: string;
  siteUrl: string;
  seoTitle: string;
  seoDescription: string;
  navItems: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Rushikesh Joshi",
  role: "Associate Solution Consultant",
  company: "FireFlink",
  location: "Bengaluru, India (From Nagpur, Maharashtra)",
  email: "rj751054@gmail.com",
  // Configure real URLs here when available. When empty, buttons/links stay safely hidden.
  linkedinUrl: "", // e.g. "https://www.linkedin.com/in/rushikesh-joshi"
  resumeUrl: "",   // e.g. "/resume.pdf" or external URL
  githubUrl: "",   // e.g. "https://github.com/rushikeshjoshi"
  twitterUrl: "",
  siteUrl: "https://rushikeshjoshi.dev",
  seoTitle: "Rushikesh Joshi | Technology, Business & Solution Consulting",
  seoDescription:
    "Personal portfolio of Rushikesh Joshi — Associate Solution Consultant at FireFlink. Exploring the intersection of customer problem-solving, SaaS test automation, technical pre-sales, and solution engineering.",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "How I Think", href: "#how-i-think" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Projects", href: "#projects" },
    { label: "Questions", href: "#questions" },
    { label: "Ideas & Notes", href: "#ideas" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
