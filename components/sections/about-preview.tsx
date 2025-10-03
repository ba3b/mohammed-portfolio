'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Smartphone, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { resumeData } from '@/data/resume'

const skills = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Expo, Flutter',
    color: 'text-green-400',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'TypeScript, ReactJs, Next.js',
    color: 'text-blue-400',
  },
  {
    icon: Code,
    title: 'Backend Development',
    description: 'Express.js, PHP',
    color: 'text-purple-400',
  },
]

export function AboutPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Building the future of{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  mobile experiences
                </span>
              </h2>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                I'm a Mobile Application Developer passionate about crafting accessible,
                pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                Currently building production apps at Ventionex Sdn. Bhd.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I do</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <skill.icon className={`h-6 w-6 ${skill.color} mt-1`} />
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button asChild variant="outline" className="focus-ring bg-transparent">
              <Link href="/about">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Experience</h3>
            {resumeData.experience.slice(0, 3).map((exp, idx) => {
              const gradients = [
                'from-green-400 to-blue-500',
                'from-blue-400 to-purple-500',
                'from-green-400 to-purple-500',
              ]

              return (
                <Card
                  key={`${exp.company}-${idx}`}
                  className={
                    idx === 0 ? 'bg-muted/30 border-border/50' : 'bg-muted/20 border-border/30'
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${
                          gradients[idx % gradients.length]
                        } rounded-lg flex items-center justify-center`}
                      >
                        {/* keep first two icons for visual variety */}
                        {idx === 0 ? (
                          <Smartphone className="h-6 w-6 text-white" />
                        ) : idx === 1 ? (
                          <Code2 className="h-6 w-6 text-white" />
                        ) : (
                          <Code className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{exp.role}</h4>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.achievements.slice(0, 6).map((a, i) => (
                            <li key={i}>• {a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
