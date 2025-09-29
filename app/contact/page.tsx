import type { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { SocialLinks } from "@/components/sections/social-links"

export const metadata: Metadata = {
  title: "Contact - Mohammed Baabad",
  description: "Get in touch with Mohammed Baabad for mobile app development opportunities and collaborations.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  )
}
