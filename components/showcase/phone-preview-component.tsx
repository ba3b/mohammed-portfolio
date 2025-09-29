"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mockScreens = [
  {
    title: "Home Screen",
    image: "/mobile-app-home-screen.png",
    description: "Main dashboard with navigation",
  },
  {
    title: "Profile",
    image: "/mobile-app-profile.png",
    description: "User profile and settings",
  },
  {
    title: "Timeline",
    image: "/mobile-app-timeline-screen.jpg",
    description: "Activity timeline view",
  },
]

export function PhonePreviewComponent() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % mockScreens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoRotate])

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Controls */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setAutoRotate(!autoRotate)}
          className="flex items-center gap-2"
        >
          {autoRotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {autoRotate ? "Pause" : "Play"}
        </Button>
        <span className="text-sm text-muted-foreground">
          {mockScreens[currentScreen].title} ({currentScreen + 1}/{mockScreens.length})
        </span>
      </div>

      {/* Phone Mockup */}
      <div className="relative">
        <motion.div
          animate={{ rotateY: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
        >
          {/* Screen */}
          <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

            {/* Screen Content */}
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col items-center justify-center p-8 pt-12"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">{mockScreens[currentScreen].title}</span>
              </div>
              <p className="text-center text-sm text-gray-600">{mockScreens[currentScreen].description}</p>
            </motion.div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full" />
          </div>
        </motion.div>

        {/* Screen Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {mockScreens.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentScreen ? "bg-primary" : "bg-muted-foreground/30",
              )}
              onClick={() => setCurrentScreen(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
