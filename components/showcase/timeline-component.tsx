"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Circle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const timelineEvents = [
  {
    id: "1",
    title: "Project Kickoff",
    description: "Initial planning and requirements gathering",
    date: "Jan 2024",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "UI/UX Design",
    description: "Wireframes and visual design creation",
    date: "Feb 2024",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Development",
    description: "Component implementation and testing",
    date: "Mar 2024",
    status: "current" as const,
  },
  {
    id: "4",
    title: "Deployment",
    description: "Production release and monitoring",
    date: "Apr 2024",
    status: "upcoming" as const,
  },
]

export function TimelineComponent() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("vertical")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "current":
        return <Clock className="h-4 w-4 text-blue-400" />
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-400"
      case "current":
        return "bg-blue-400"
      default:
        return "bg-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button
          variant={orientation === "vertical" ? "default" : "outline"}
          size="sm"
          onClick={() => setOrientation("vertical")}
        >
          Vertical
        </Button>
        <Button
          variant={orientation === "horizontal" ? "default" : "outline"}
          size="sm"
          onClick={() => setOrientation("horizontal")}
        >
          Horizontal
        </Button>
      </div>

      <div
        className={cn(
          "timeline",
          orientation === "horizontal" ? "flex gap-4 overflow-x-auto pb-4" : "space-y-6 relative",
        )}
      >
        {orientation === "vertical" && <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50" />}

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              "timeline-event",
              orientation === "horizontal" ? "flex-shrink-0 w-64 text-center" : "relative flex items-start gap-4 pl-12",
            )}
          >
            {orientation === "vertical" && (
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full border-4 border-background z-10">
                <div className={cn("w-full h-full rounded-full", getStatusColor(event.status))} />
              </div>
            )}

            <div
              className={cn(
                "flex-1 p-4 rounded-lg border border-border/50",
                event.status === "current" ? "bg-blue-50/50 dark:bg-blue-950/20" : "bg-muted/20",
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                {getStatusIcon(event.status)}
                <h3 className="font-semibold text-sm">{event.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
              <div className="text-xs text-muted-foreground">{event.date}</div>
            </div>

            {orientation === "horizontal" && index < timelineEvents.length - 1 && (
              <div className="absolute top-1/2 -right-2 w-4 h-px bg-border/50 transform -translate-y-1/2" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
