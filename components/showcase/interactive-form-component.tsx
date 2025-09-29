"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  message: string
}

export function InteractiveFormComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : null
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : null
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : null
      default:
        return null
    }
  }

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, formData[name])
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Partial<FormData> = {}
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData
      const error = validateField(fieldName, formData[fieldName])
      if (error) newErrors[fieldName] = error
    })

    setErrors(newErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
      setTouched({})
      setErrors({})
    }, 3000)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for your message. I'll get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={cn(
              "transition-colors",
              errors.name && touched.name && "border-red-400 focus:border-red-400",
              !errors.name && touched.name && formData.name && "border-green-400 focus:border-green-400",
            )}
            placeholder="Enter your name"
          />
          {touched.name && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.name ? (
                <AlertCircle className="h-4 w-4 text-red-400" />
              ) : (
                formData.name && <CheckCircle className="h-4 w-4 text-green-400" />
              )}
            </div>
          )}
        </div>
        {errors.name && touched.name && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-400">
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={cn(
              "transition-colors",
              errors.email && touched.email && "border-red-400 focus:border-red-400",
              !errors.email && touched.email && formData.email && "border-green-400 focus:border-green-400",
            )}
            placeholder="Enter your email"
          />
          {touched.email && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.email ? (
                <AlertCircle className="h-4 w-4 text-red-400" />
              ) : (
                formData.email && <CheckCircle className="h-4 w-4 text-green-400" />
              )}
            </div>
          )}
        </div>
        {errors.email && touched.email && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-400">
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={cn(
              "transition-colors min-h-[100px]",
              errors.message && touched.message && "border-red-400 focus:border-red-400",
              !errors.message && touched.message && formData.message && "border-green-400 focus:border-green-400",
            )}
            placeholder="Enter your message"
          />
          {touched.message && (
            <div className="absolute right-3 top-3">
              {errors.message ? (
                <AlertCircle className="h-4 w-4 text-red-400" />
              ) : (
                formData.message && <CheckCircle className="h-4 w-4 text-green-400" />
              )}
            </div>
          )}
        </div>
        {errors.message && touched.message && (
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-400">
            {errors.message}
          </motion.p>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
