'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { resumeData } from '@/data/resume'

export function ExperienceTimeline() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey in mobile application development, highlighting key achievements
            and technologies I've worked with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/50 hidden md:block" />

          <div className="space-y-8">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-16 bg-muted/30 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <span className="font-medium">{exp.company}</span>
                          {exp.location && (
                            <>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-background hidden md:block" />

              <Card className="md:ml-16 bg-muted/20 border-border/30">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Education</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <span className="font-medium">
                          {resumeData.education[0]?.degree || "Bachelor's Degree"}
                        </span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-sm">
                            {resumeData.education[0]?.location || 'Malaysia'}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {resumeData.education[0]?.school || 'University Name'} • Studied a complete
                        computer science degree with a focus on mobile application development.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-4 w-4" />
                      <span>{resumeData.education[0]?.year || '2024'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
