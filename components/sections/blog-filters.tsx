"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const tags = [
  "All",
  "React Native",
  "Flutter",
  "Performance",
  "Architecture",
  "Mobile Development",
  "Best Practices",
  "Comparison",
]

export function BlogFilters() {
  const [selectedTag, setSelectedTag] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="transition-all duration-200"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
