"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

interface ProjectNavigationProps {
  currentSlug: string
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  if (!prevProject && !nextProject) return null

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Previous Project */}
          {prevProject && (
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/50 border-border/50">
              <CardContent className="p-0">
                <Link href={`/projects/${prevProject.slug}`} className="block">
                  <div className="flex items-center gap-4 p-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ArrowLeft className="h-4 w-4" />
                      <span className="text-sm font-medium">Previous</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-6 pb-6">
                    <Image
                      src={prevProject.featuredImage || "/placeholder.svg"}
                      alt={prevProject.title}
                      width={80}
                      height={60}
                      className="w-20 h-15 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{prevProject.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{prevProject.description}</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Next Project */}
          {nextProject && (
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/50 border-border/50">
              <CardContent className="p-0">
                <Link href={`/projects/${nextProject.slug}`} className="block">
                  <div className="flex items-center justify-end gap-4 p-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-sm font-medium">Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-6 pb-6">
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{nextProject.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{nextProject.description}</p>
                    </div>
                    <Image
                      src={nextProject.featuredImage || "/placeholder.svg"}
                      alt={nextProject.title}
                      width={80}
                      height={60}
                      className="w-20 h-15 object-cover rounded-lg"
                    />
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Back to Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="focus-ring bg-transparent">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
