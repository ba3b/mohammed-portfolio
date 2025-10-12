'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'
import { resumeData } from '@/data/resume'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: resumeData.social.github,
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: resumeData.social.linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: resumeData.social.whatsapp,
    color: 'hover:text-green-600',
  },
]

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`w-full justify-start gap-3 ${social.color} transition-colors`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Connect with me for updates on mobile development, tech insights, and project
              showcases.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
