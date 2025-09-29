"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import Link from "next/link"

export function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-2 mb-3">
                {post.featured && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button asChild variant="ghost" className="w-full justify-between p-0 h-auto">
                <Link href={`/blog/${post.slug}`}>
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
