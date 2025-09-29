"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import Link from "next/link"

interface BlogPostNavigationProps {
  currentSlug: string
}

export function BlogPostNavigation({ currentSlug }: BlogPostNavigationProps) {
  const currentIndex = blogPosts.findIndex((post) => post.slug === currentSlug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {prevPost && (
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Button variant="ghost" asChild className="w-full justify-start p-0 h-auto">
              <Link href={`/blog/${prevPost.slug}`}>
                <div className="text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Article
                  </div>
                  <h3 className="font-semibold text-sm">{prevPost.title}</h3>
                </div>
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {nextPost && (
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Button variant="ghost" asChild className="w-full justify-end p-0 h-auto">
              <Link href={`/blog/${nextPost.slug}`}>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                    Next Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm">{nextPost.title}</h3>
                </div>
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </motion.div>
  )
}
