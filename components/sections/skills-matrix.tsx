'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { resumeData } from '@/data/resume'

const categoryColors = {
  mobile: 'bg-green-500/10 text-green-400 border-green-500/20',
  frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  backend: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  tools: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  design: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  language: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
}

const categoryLabels = {
  mobile: 'Mobile Development',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
  design: 'Design',
  language: 'Languages',
}

const proficiencyConfig = {
  expert: {
    label: 'Expert',
    width: 'w-full',
    color: 'bg-green-500',
    description: 'Deep expertise and production experience',
  },
  proficient: {
    label: 'Proficient',
    width: 'w-4/5',
    color: 'bg-blue-500',
    description: 'Strong working knowledge',
  },
  competent: {
    label: 'Competent',
    width: 'w-3/5',
    color: 'bg-yellow-500',
    description: 'Comfortable and capable',
  },
  beginner: {
    label: 'Beginner',
    width: 'w-2/5',
    color: 'bg-orange-500',
    description: 'Learning and developing skills',
  },
}

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = Array.from(new Set(resumeData.skills.map(skill => skill.category)))
  const filteredSkills =
    selectedCategory === 'all'
      ? resumeData.skills
      : resumeData.skills.filter(skill => skill.category === selectedCategory)

  // Group skills by category for display
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = filteredSkills.filter(skill => skill.category === category)
    return acc
  }, {} as Record<string, typeof filteredSkills>)

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills and proficiency levels based on
            professional experience and project complexity.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="focus-ring"
          >
            All Skills
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="focus-ring"
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </Button>
          ))}
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {(selectedCategory === 'all' ? categories : [selectedCategory]).map(
            (category, categoryIndex) => {
              const categorySkills = groupedSkills[category] || []
              if (categorySkills.length === 0) return null

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h3>
                    <Badge
                      variant="outline"
                      className={categoryColors[category as keyof typeof categoryColors]}
                    >
                      {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => {
                      const config = proficiencyConfig[skill.proficiency]
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge
                              variant="secondary"
                              className="text-xs transition-colors group-hover:bg-primary/20"
                            >
                              {config.label}
                            </Badge>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: 'var(--target-width)' }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.05,
                                ease: 'easeOut',
                              }}
                              viewport={{ once: true }}
                              className={`h-full ${config.color} rounded-full`}
                              style={
                                {
                                  '--target-width':
                                    config.width === 'w-full'
                                      ? '100%'
                                      : config.width === 'w-4/5'
                                      ? '80%'
                                      : config.width === 'w-3/5'
                                      ? '60%'
                                      : '40%',
                                } as React.CSSProperties
                              }
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            }
          )}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <h4 className="text-sm font-semibold text-muted-foreground mb-4">Proficiency Levels</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(proficiencyConfig).map(([key, config]) => (
              <div key={key} className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full ${config.color} mt-1 flex-shrink-0`} />
                <div>
                  <div className="font-medium text-sm">{config.label}</div>
                  <div className="text-xs text-muted-foreground">{config.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
