'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, User, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/types'

interface ProjectHeroProps {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="focus-ring">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{project.title}</h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="font-medium">{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Role:</span>
                  <span className="font-medium">{project.role}</span>
                </div>
                {project.slug === 'sop-management-app' && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Company:</span>
                    <span className="font-medium">Ventionex Sdn. Bhd.</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button asChild className="focus-ring">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" asChild className="focus-ring bg-transparent">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.playstore && (
                <Button variant="outline" asChild className="focus-ring bg-transparent">
                  <Link href={project.playstore} target="_blank" rel="noopener noreferrer">
                    Play Store
                  </Link>
                </Button>
              )}
              {project.appstore && (
                <Button variant="outline" asChild className="focus-ring bg-transparent">
                  <Link href={project.appstore} target="_blank" rel="noopener noreferrer">
                    App Store
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={project.featuredImage || '/placeholder.svg'}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
