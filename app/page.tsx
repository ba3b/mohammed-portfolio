import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { ContactPreview } from "@/components/sections/contact-preview"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <ContactPreview />
    </main>
  )
}
