'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// @ts-ignore
import Spline from '@splinetool/react-spline'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8"
          >
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
              >
                Mohammed{' '}
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Baabbad
                </span>
              </motion.h1>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Mobile Application Developer
                </h2>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Saudi Arabia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">Available</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance"
              >
                Building production mobile apps and complex UI systems using{' '}
                <span className="text-green-400 font-medium">React Native</span> and{' '}
                <span className="text-blue-400 font-medium">Flutter</span>. UI-led,
                performance-first, production-ready solutions.
              </motion.p>
            </div>

            {/* Experience highlight */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="p-4 rounded-lg bg-muted/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="text-sm text-muted-foreground mb-1">Worked at</div>
              <div className="font-semibold text-foreground">Ventionex Sdn. Bhd.</div>
              <div className="text-sm text-muted-foreground">
                Full Stack Mobile Application Developer • ~1 year
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="focus-ring bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="focus-ring bg-background/50 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="flex gap-3"
            >
              <Button variant="ghost" size="icon" className="focus-ring hover:bg-muted/50">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="focus-ring hover:bg-muted/50">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  1
                </div>
                <div className="text-sm text-muted-foreground">Year Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Spline scene="https://prod.spline.design/brHyJLJi0GtBCfa3/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
