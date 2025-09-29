import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { ExperienceTimeline } from "@/components/sections/experience-timeline"
import { SkillsMatrix } from "@/components/sections/skills-matrix"
import { PersonalStory } from "@/components/sections/personal-story"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "About - Mohammed Baabad",
  description:
    "Learn more about Mohammed Baabad, Mobile Application Developer with expertise in React Native, Flutter, and modern UI development.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <AboutHero />
        <PersonalStory />
        <ExperienceTimeline />
        <SkillsMatrix />
      </main>
    </>
  )
}
