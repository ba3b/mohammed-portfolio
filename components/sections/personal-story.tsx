'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Smartphone, Users, Target } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'I believe in writing maintainable, well-documented code that scales with the team and product.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description:
      'Every interface should feel native and performant, regardless of the device or platform.',
  },
  {
    icon: Users,
    title: 'User-Centered',
    description:
      'Great apps start with understanding user needs and designing solutions that truly help.',
  },
  {
    icon: Target,
    title: 'Performance',
    description:
      "Fast, responsive applications aren't just nice to have—they're essential for user satisfaction.",
  },
]

export function PersonalStory() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Why I love{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                mobile development
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mobile development combines my passion for both design and engineering. There's
                something magical about building an interface that feels natural in someone's
                hands—every tap, swipe, and transition needs to feel intentional and delightful.
              </p>

              <p>
                At Ventionex, I've had the opportunity to work on complex enterprise applications
                where performance and reliability are critical. Building timeline components, action
                dialogs, and resolution systems has taught me the importance of thoughtful state
                management and user feedback.
              </p>

              <p>
                What excites me most is the intersection of technical challenge and user impact.
                Whether it's optimizing a complex animation, implementing a seamless cross-platform
                experience, or designing a component system that empowers the entire team, I'm
                driven by creating solutions that make a real difference.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">In my spare time</h3>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open
                source projects, or experimenting with the latest mobile development frameworks. I
                believe in continuous learning and staying current with the rapidly evolving mobile
                ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <h3 className="text-2xl font-bold mb-2">What drives me</h3>

            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-background/50 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
