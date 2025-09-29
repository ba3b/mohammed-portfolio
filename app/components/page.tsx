import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ComponentsHero } from "@/components/sections/components-hero"
import { ComponentsGrid } from "@/components/sections/components-grid"

export const metadata: Metadata = {
  title: "Components - Mohammed Baabad",
  description:
    "Explore the component library and UI systems built by Mohammed Baabad, showcasing reusable React Native and web components.",
}

export default function ComponentsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ComponentsHero />
        <ComponentsGrid />
      </main>
    </>
  )
}
