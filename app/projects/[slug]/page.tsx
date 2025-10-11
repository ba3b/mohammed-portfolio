import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { ProjectHero } from '@/components/sections/project-hero'
import { ProjectDetails } from '@/components/sections/project-details'
import { ProjectGallery } from '@/components/sections/project-gallery'
import { ProjectNavigation } from '@/components/sections/project-navigation'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Mohammed Baabbad`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.featuredImage],
    },
  }
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ProjectHero project={project} />
        <ProjectDetails project={project} />
        <ProjectGallery project={project} />
        <ProjectNavigation currentSlug={slug} />
      </main>
    </>
  )
}
