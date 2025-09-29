"use client"

import { motion } from "framer-motion"
import { PenTool, BookOpen, Code } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border">
              <PenTool className="w-6 h-6 text-primary" />
              <BookOpen className="w-6 h-6 text-accent" />
              <Code className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Thoughts on
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Development</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Insights, tutorials, and reflections on mobile app development, software engineering, and the ever-evolving
            tech landscape.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>React Native</span>
            <span>•</span>
            <span>Flutter</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Software Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
