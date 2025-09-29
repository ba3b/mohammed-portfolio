"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohammed.baabad@example.com",
    href: "mailto:mohammed.baabad@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+60 12-345-6789",
    href: "tel:+60123456789",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kuala Lumpur, Malaysia",
    href: null,
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "GMT+8 (MYT)",
    href: null,
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
