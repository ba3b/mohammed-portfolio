"use client"

import { motion } from "framer-motion"

export function ProjectsHero() {
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
            My{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A collection of mobile applications, UI systems, and development projects showcasing my expertise in React
            Native, Flutter, and modern development practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
