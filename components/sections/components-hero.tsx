"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Smartphone } from "lucide-react"

export function ComponentsHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Component{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed mb-8">
            A showcase of reusable UI components and systems I've built, demonstrating my approach to scalable,
            accessible, and performant interface design.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Mobile-First</h3>
              <p className="text-sm text-muted-foreground">
                Components designed for touch interfaces and responsive layouts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Reusable</h3>
              <p className="text-sm text-muted-foreground">
                Well-documented components with TypeScript props and examples
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Accessible</h3>
              <p className="text-sm text-muted-foreground">Built with ARIA standards and keyboard navigation</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
