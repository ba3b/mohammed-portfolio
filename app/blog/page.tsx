import type { Metadata } from "next"
import { BlogHero } from "@/components/sections/blog-hero"
import { BlogGrid } from "@/components/sections/blog-grid"
import { BlogFilters } from "@/components/sections/blog-filters"

export const metadata: Metadata = {
  title: "Blog - Mohammed Baabad",
  description: "Insights and thoughts on mobile app development, React Native, Flutter, and software engineering.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      <div className="container mx-auto px-4 py-16">
        <BlogFilters />
        <BlogGrid />
      </div>
    </main>
  )
}
