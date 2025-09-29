"use client"

import { motion } from "framer-motion"
import type { BlogPost } from "@/data/blog-posts"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="prose prose-lg dark:prose-invert max-w-none mb-16"
    >
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
    </motion.article>
  )
}
