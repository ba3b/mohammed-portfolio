import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'

export const metadata: Metadata = {
  title: 'Projects - Mohammed Baabbad',
  description:
    "Explore Mohammed Baabbad's mobile application projects, including React Native, Flutter, and UI component systems.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
    </>
  )
}
