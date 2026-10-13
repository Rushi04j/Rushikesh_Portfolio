import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HowIThinkSection } from "@/components/HowIThinkSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { QuestionsSection } from "@/components/QuestionsSection";
import { IdeasSection } from "@/components/IdeasSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#10131A] text-[#F3F5F7] dark:bg-[#10131A] dark:text-[#F3F5F7] bg-light-bg text-light-textPrimary transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <HowIThinkSection />
        <CaseStudiesSection />
        <QuestionsSection />
        <IdeasSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
