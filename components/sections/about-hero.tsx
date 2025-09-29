"use client"

import { motion } from "framer-motion"
import { Download, MapPin, Mail, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <Card className="bg-muted/30 border-border/50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
                      MB
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Mohammed Baabad</h1>
                  <p className="text-muted-foreground mb-4">Mobile Application Developer</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Malaysia</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Available for opportunities</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">mohammed.baabad@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">~1 year experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Ventionex Sdn. Bhd.</span>
                  </div>
                </div>

                <Button className="w-full mt-6 focus-ring">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Building the future of{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  mobile experiences
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Mobile Application Developer passionate about crafting accessible, pixel-perfect user interfaces
                that blend thoughtful design with robust engineering. My favorite work lies at the intersection of
                design and development, creating experiences that not only look great but are meticulously built for
                performance and usability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20 border-border/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-green-400">Current Focus</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently working as a Full Stack Mobile Application Developer at Ventionex Sdn. Bhd., specializing
                    in React Native and Expo development. I contribute to the creation and maintenance of production
                    mobile applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20 border-border/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-blue-400">What I'm Looking For</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm interested in roles that challenge me to grow as a mobile developer, working on complex UI
                    systems, performance optimization, and cross-platform solutions that make a real impact.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I believe that great mobile applications start with understanding the user's needs and constraints.
                  Every interaction should feel natural and purposeful, whether it's a simple button press or a complex
                  multi-step workflow.
                </p>
                <p>
                  My development process is UI-first and performance-focused. I start by building the interface
                  components, ensuring they work seamlessly across different screen sizes and device capabilities, then
                  integrate the backend functionality with careful attention to loading states and error handling.
                </p>
                <p>
                  I'm particularly passionate about creating reusable component systems that scale with the product and
                  team. Clean, well-documented code isn't just about maintainability—it's about enabling the entire team
                  to move faster and build better experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
