# Rushikesh Joshi — Personal Brand & Professional Portfolio

> **"Understand the problem. Connect the dots. Deliver value."**

A responsive, production-ready personal portfolio website for **Rushikesh Joshi**, Associate Solution Consultant at **FireFlink**. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Lucide Icons.

---

## 🌟 Positioning & Identity

This website reflects the professional identity of an early-career solution consultant sitting at the intersection of:
- **Technology & QA Automation** (SaaS test platforms, REST APIs, Playwright vs. platform trade-offs)
- **Consultative Problem Solving** (listening before pitching, discovery frameworks)
- **Clear Technical Communication** (translating technical capabilities into tangible business outcomes)
- **Continuous Learning** (practical hands-on growth in testing, API automation, and solution engineering)

---

## 🚀 Quickstart

### Prerequisites
- Node.js `v18.17.0` or later (tested on Node `v25.9.0`)
- npm `v9+` or later

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Verification
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
Rushikesh_Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Secure server-side email endpoint (Resend + rate limit + honeypot + mailto fallback)
│   ├── globals.css              # Dark & light theme color tokens, accessible focus rings, scrollbars
│   ├── layout.tsx               # Root layout, Inter font, SEO meta tags, OpenGraph, Viewport
│   ├── page.tsx                 # Assembles all 10 portfolio sections
│   ├── robots.ts                # SEO robots.txt generator
│   ├── sitemap.ts               # SEO sitemap.xml generator
│   └── icon.svg                 # SVG monogram favicon
├── components/
│   ├── AboutSection.tsx         # Real story: friendship advisor origin, listening first, curiosity about tech
│   ├── CaseStudiesSection.tsx   # 3 anonymized scenarios: AI in context, Playwright vs Platform, relationship building
│   ├── ContactSection.tsx       # Conversation-first contact: direct email, copy button, validated form, mailto fallback
│   ├── ExperienceSection.tsx    # Tabbed timeline: Full-time FireFlink, Intern, QSpiders training, Zidio, Education
│   ├── Footer.tsx               # Clean footer with tagline, quick links, and back-to-top
│   ├── HeroSection.tsx          # Eyebrow, headline, copy, interactive workflow diagram, handwritten note
│   ├── HowIThinkSection.tsx     # 4-stage framework: Listen, Ask, Connect, Evaluate + diagnostic questions
│   ├── IdeasSection.tsx         # Working drafts & notes: Demo principles, Playwright questions, AI utility, problem thinking
│   ├── Navbar.tsx               # Sticky navbar, active section indicator, theme toggle, mobile drawer
│   ├── ProjectsSection.tsx      # Hands-on practice: API testing, discovery framework, SaaS evaluation model
│   ├── QuestionsSection.tsx     # 4 deep interactive question cards with systematic investigation breakdown
│   ├── SkillsSection.tsx        # Honest skills categorized with real progression stages (no fake percentages)
│   ├── ThemeProvider.tsx        # Dark/light theme state with localStorage persistence (dark default)
│   └── ThemeToggle.tsx          # Accessible theme toggle switch
├── config/
│   └── site.ts                  # Central configuration: social links, contact email, resume URL, SEO metadata
├── content/
│   ├── case-studies.ts          # Detailed case studies data
│   ├── experience.ts            # Work history, training, and education data
│   ├── how-i-think.ts           # Problem-solving stages, actions, and principles
│   ├── ideas.ts                 # Editorial draft essays and notes
│   ├── projects.ts              # Projects, learning initiatives, and tool metadata
│   ├── questions.ts             # Thinking questions with investigation steps
│   └── skills.ts                # Skills categorized with verified stages
├── .env.example                 # Example environment variables for Resend email delivery
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚙️ Content & Configuration Guide

All personal links, experiences, case studies, and articles are isolated in structured TypeScript files under `config/` and `content/`. You never have to modify UI component code to update your profile.

### 1. Updating Social & Resume Links
Open `config/site.ts`:
```typescript
export const siteConfig = {
  name: "Rushikesh Joshi",
  email: "rj751054@gmail.com",
  // Configure real URLs below when ready. Empty strings keep buttons safely hidden:
  linkedinUrl: "https://www.linkedin.com/in/your-profile",
  resumeUrl: "/resume.pdf", // or an external Google Drive / Dropbox link
  githubUrl: "https://github.com/your-username",
};
```
> **Note on Button Behavior:** Until `resumeUrl`, `linkedinUrl`, or `githubUrl` contain non-empty strings, their buttons/links remain completely hidden, preventing broken links or dead buttons.

### 2. Updating Experience or Education
Open `content/experience.ts`:
- Update roles, dates, company descriptions, and responsibilities.
- The HSC junior college name can be specified when verified.
- Clear separation is maintained between Full-Time, Internship, Vocational Training, and Academic Degrees.

### 3. Adding New Projects or Articles
- **Projects:** Edit `content/projects.ts` to add or update projects. If `repoUrl` or `demoUrl` is empty, an "Internal Learning" badge is displayed rather than a broken link.
- **Ideas & Notes:** Edit `content/ideas.ts` to add new articles or notes. The reading modal will automatically render your paragraphs and takeaways.

---

## 📬 Contact Form & Resend Email Integration

The contact form in `components/ContactSection.tsx` communicates with the server-side API at `app/api/contact/route.ts`.

### Features:
1. **Server-Side Validation:** Validates required fields, email format, and minimum message length.
2. **Spam & Abuse Protection:** Hidden honeypot field (`honeypot`) silently traps automated bots; IP rate-limiting prevents burst attacks.
3. **HTML Sanitization:** Prevents script injection while cleanly formatting email tables.
4. **Resend Transactional Email:** Powered by [Resend](https://resend.com).
5. **Fail-Safe Mailto Fallback:** If `RESEND_API_KEY` is not yet configured or if delivery fails, the UI notifies the visitor and generates a one-click pre-filled `mailto:` trigger directly addressed to `rj751054@gmail.com`.

### Setting Up Live Email Delivery:
1. Create a free account at [resend.com](https://resend.com).
2. Generate an API key.
3. Create `.env.local` in the project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_TO_EMAIL=rj751054@gmail.com
   CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
   ```
   *(Note: For production custom domains, verify your domain in Resend and update `CONTACT_FROM_EMAIL=Portfolio Contact <contact@yourdomain.com>`)*.

---

## 🎨 Theme System (Dark Mode Default)

- **Dark Mode (Default):** Deep charcoal/navy background (`#10131A`), card surfaces (`#1A202B`), primary text (`#F3F5F7`), secondary muted slate, and vibrant teal accent (`#55D6BE`).
- **Light Mode:** Crisp off-white slate background (`#F8FAFC`), pure white card surfaces (`#FFFFFF`), high-contrast dark slate text (`#0F172A`), and accessible teal accent (`#0D9488`).
- **Persistence:** Remembers the user's selected preference in `localStorage`.
- **Accessibility:** Meets WCAG contrast standards in both themes with visible keyboard `:focus-visible` rings.

---

## 🚢 Deployment (Vercel)

This application is built for seamless zero-config deployment on Vercel:

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In the **Environment Variables** section, optionally add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
5. Click **Deploy**. Vercel will automatically build the Next.js application and assign a live production URL.

---

## 📋 Definition of Done Checklist

| Requirement | Status | Notes |
|---|:---:|---|
| Next.js + TypeScript + Tailwind Setup | ✅ PASS | Fully installed, typed, and compiled |
| Production Build (`npm run build`) | ✅ PASS | Clean build, 0 errors, static generation of all pages |
| Dark / Light Mode Toggle | ✅ PASS | Dark default, persists in `localStorage`, accessible tokens |
| Mobile Navigation Menu | ✅ PASS | Responsive drawer menu with section anchors |
| Sticky Navbar with Active Indicator | ✅ PASS | Highlight updates based on scroll position |
| Hero Section with Workflow & Note | ✅ PASS | Problem-solving flow + handwritten note |
| About Me Narrative | ✅ PASS | Real friendship advisor story, tech transition, FireFlink |
| Experience & Education Timeline | ✅ PASS | Verified dates, distinct badges (Full-Time vs Intern vs Training) |
| How I Think: 4 Stages | ✅ PASS | Listen, Ask, Connect, Evaluate with diagnostic questions |
| 3 Detailed Case Studies | ✅ PASS | AI in context, Playwright vs Platform, relationship building |
| Editable Projects Grid | ✅ PASS | API practice, discovery framework, graceful missing link handling |
| 4 Interactive Thinking Questions | ✅ PASS | Deep-dive investigation steps with keyboard accessibility |
| Ideas & Notes with Modal Reader | ✅ PASS | 4 proposed topics with complete readable draft essays |
| Skills Section with Honest Stages | ✅ PASS | Core Strength, Foundational, Practicing, Hands-On |
| Contact Section & API | ✅ PASS | Direct email, copy button, server validation, Resend + mailto fallback |
| SEO, Sitemap, Robots, Favicon | ✅ PASS | Metatags, `/sitemap.xml`, `/robots.txt`, SVG RJ favicon |
| No Fabricated Claims / Clean Positioning | ✅ PASS | Ambitious yet authentic pre-sales positioning |
