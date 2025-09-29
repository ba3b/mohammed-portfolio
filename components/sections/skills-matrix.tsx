"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { resumeData } from "@/data/resume"

const categoryColors = {
  mobile: "text-green-400",
  frontend: "text-blue-400",
  backend: "text-purple-400",
  tools: "text-orange-400",
  design: "text-pink-400",
}

const categoryLabels = {
  mobile: "Mobile Development",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
  design: "Design",
}

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = Array.from(new Set(resumeData.skills.map((skill) => skill.category)))
  const filteredSkills =
    selectedCategory === "all"
      ? resumeData.skills
      : resumeData.skills.filter((skill) => skill.category === selectedCategory)

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
            A comprehensive overview of my technical skills, with proficiency levels based on professional experience
            and project complexity.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="focus-ring"
          >
            All Skills
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="focus-ring"
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 border-border/50 hover:bg-background/80 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <Badge variant="outline" className={`text-xs ${categoryColors[skill.category]}`}>
                      {categoryLabels[skill.category as keyof typeof categoryLabels]}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const categorySkills = resumeData.skills.filter((skill) => skill.category === category)
            const avgProficiency = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length,
            )

            return (
              <Card key={category} className="bg-muted/30 border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className={`font-semibold mb-2 ${categoryColors[category as keyof typeof categoryColors]}`}>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  <div className="text-2xl font-bold mb-1">{avgProficiency}%</div>
                  <div className="text-xs text-muted-foreground">
                    {categorySkills.length} skill{categorySkills.length !== 1 ? "s" : ""}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
