"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Coffee } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border">
              <Mail className="w-6 h-6 text-primary" />
              <MessageSquare className="w-6 h-6 text-accent" />
              <Coffee className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let's Build Something
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Amazing</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Ready to discuss your next mobile app project? I'm always excited to collaborate on innovative solutions and
            bring ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </span>
            <span>•</span>
            <span>Usually responds within 24 hours</span>
            <span>•</span>
            <span>Based in Malaysia</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
