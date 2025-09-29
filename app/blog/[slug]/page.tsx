import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostHero } from "@/components/sections/blog-post-hero"
import { BlogPostContent } from "@/components/sections/blog-post-content"
import { BlogPostNavigation } from "@/components/sections/blog-post-navigation"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Mohammed Baabad`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <BlogPostHero post={post} />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <BlogPostContent post={post} />
          <BlogPostNavigation currentSlug={params.slug} />
        </div>
      </div>
    </main>
  )
}
