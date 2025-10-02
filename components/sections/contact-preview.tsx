'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export function ContactPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              amazing together
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            I'm always interested in new opportunities and exciting projects. Whether you're looking
            for a mobile developer or want to discuss a potential collaboration, I'd love to hear
            from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-muted/30 border-border/50">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">mbaabad1234@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-border/50">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Saudi Arabia</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-border/50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-sm text-muted-foreground">Open to opportunities</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="focus-ring">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="focus-ring bg-transparent">
              <Link href="/about">Download Resume</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
