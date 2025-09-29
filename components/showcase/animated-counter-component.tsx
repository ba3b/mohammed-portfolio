"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCounterProps {
  value: number
  duration?: number
  format?: (value: number) => string
  prefix?: string
  suffix?: string
  className?: string
}

function AnimatedCounter({
  value,
  duration = 2000,
  format = (n) => n.toLocaleString(),
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = count

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out quart function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration, count])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(count)}
      {suffix}
    </span>
  )
}

export function AnimatedCounterComponent() {
  const [trigger, setTrigger] = useState(0)

  const stats = [
    { label: "Projects Completed", value: 15, prefix: "", suffix: "+" },
    { label: "Lines of Code", value: 50000, prefix: "", suffix: "+" },
    { label: "Client Satisfaction", value: 98, prefix: "", suffix: "%" },
    { label: "Coffee Consumed", value: 1247, prefix: "", suffix: " cups" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Statistics Dashboard</h3>
        <Button variant="outline" size="sm" onClick={() => setTrigger(trigger + 1)}>
          Restart Animation
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={`${stat.label}-${trigger}`}>
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    duration={2000 + index * 200}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Counters animate when they come into view and use easing functions for smooth transitions.
        </p>
      </div>
    </div>
  )
}
