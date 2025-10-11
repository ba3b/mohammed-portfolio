'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Code, Lightbulb, Target } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-400" />
                Technical Implementation
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Insights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Problem Statement */}
            <Card className="bg-background/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-400" />
                  Challenge
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.slug === 'mobile-unified-platform' &&
                    'Enterprise mobile applications require complex state management, real-time updates, and intuitive user interfaces. The challenge was building a comprehensive SOP management system that could handle complex workflows while maintaining excellent user experience.'}
                  {project.slug === 'fyp-project' &&
                    'Academic projects require balancing theoretical research with practical implementation. The challenge was designing a mobile application that demonstrates advanced development concepts while solving a real-world problem.'}
                  {project.slug === 'utmdash' &&
                    'UTM students living on campus faced a significant problem with parcel delivery as there was no proper system to receive packages. Manual warehouse processes were inefficient and time-consuming, requiring a comprehensive solution to automate shipment organization.'}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-background/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  Solution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.slug === 'mobile-unified-platform' &&
                    'Built a comprehensive mobile application using React Native and Expo, featuring reusable timeline components, interactive dialogs, and a sophisticated resolution system. Implemented skeleton loading states and optimized performance for enterprise use.'}
                  {project.slug === 'fyp-project' &&
                    'Developing a research-focused mobile application that combines academic rigor with practical implementation. The project showcases advanced UI/UX patterns and backend integration strategies.'}
                  {project.slug === 'utmdash' &&
                    'Developed a Flutter-based mobile application with Firebase backend integration, featuring real-time shipment tracking, automated warehouse management, and secure authentication. Created an intuitive interface for both students and warehouse staff to manage parcels efficiently.'}
                </p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-background/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Results
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.slug === 'mobile-unified-platform' &&
                    'Successfully delivered a production-ready mobile application that improved workflow efficiency and user satisfaction. The component system became reusable across other company projects, demonstrating scalable architecture.'}
                  {project.slug === 'fyp-project' &&
                    'Project is currently in development phase with comprehensive documentation and research findings. Expected to demonstrate advanced mobile development concepts and contribute to academic knowledge in the field.'}
                  {project.slug === 'utmdash' &&
                    'Successfully automated all manual warehouse processes, providing UTM students with a reliable solution for receiving parcels on campus. The application streamlined shipment organization and significantly improved the delivery experience for the campus community.'}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
