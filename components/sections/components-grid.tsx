"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Eye, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimelineComponent } from "@/components/showcase/timeline-component"
import { ActionDialogComponent } from "@/components/showcase/action-dialog-component"
import { PhonePreviewComponent } from "@/components/showcase/phone-preview-component"
import { SkeletonLoaderComponent } from "@/components/showcase/skeleton-loader-component"
import { InteractiveFormComponent } from "@/components/showcase/interactive-form-component"
import { AnimatedCounterComponent } from "@/components/showcase/animated-counter-component"

const components = [
  {
    id: "timeline",
    title: "Timeline Component",
    description: "Horizontal and vertical timeline with customizable events and animations",
    category: "Navigation",
    tags: ["React", "Animation", "Mobile"],
    component: TimelineComponent,
    code: `interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  status: 'completed' | 'current' | 'upcoming'
}

interface TimelineProps {
  events: TimelineEvent[]
  orientation?: 'horizontal' | 'vertical'
  animated?: boolean
}

export function Timeline({ events, orientation = 'vertical', animated = true }: TimelineProps) {
  return (
    <div className={cn(
      "timeline",
      orientation === 'horizontal' ? 'flex gap-4' : 'space-y-4'
    )}>
      {events.map((event, index) => (
        <TimelineEvent key={event.id} event={event} index={index} animated={animated} />
      ))}
    </div>
  )
}`,
  },
  {
    id: "action-dialog",
    title: "Action Dialog",
    description: "Modal dialog with action buttons and loading states",
    category: "Overlay",
    tags: ["React", "Modal", "Forms"],
    component: ActionDialogComponent,
    code: `interface ActionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  actions: Array<{
    label: string
    variant?: 'default' | 'destructive' | 'outline'
    onClick: () => void | Promise<void>
  }>
}

export function ActionDialog({ open, onOpenChange, title, description, actions }: ActionDialogProps) {
  const [loading, setLoading] = useState<string | null>(null)
  
  const handleAction = async (action: ActionDialogProps['actions'][0]) => {
    setLoading(action.label)
    try {
      await action.onClick()
    } finally {
      setLoading(null)
    }
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          {actions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              onClick={() => handleAction(action)}
              disabled={loading !== null}
            >
              {loading === action.label ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {action.label}
            </Button>
          ))}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    id: "phone-preview",
    title: "Phone Preview",
    description: "Interactive phone mockup for showcasing mobile apps",
    category: "Display",
    tags: ["3D", "Mobile", "Preview"],
    component: PhonePreviewComponent,
    code: `interface PhonePreviewProps {
  screens: Array<{
    title: string
    image: string
    description?: string
  }>
  autoRotate?: boolean
  interactive?: boolean
}

export function PhonePreview({ screens, autoRotate = true, interactive = true }: PhonePreviewProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  useEffect(() => {
    if (!autoRotate) return
    
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [screens.length, autoRotate])
  
  return (
    <div className="phone-preview">
      <div className="phone-frame">
        <div className="screen">
          <img src={screens[currentScreen].image || "/placeholder.svg"} alt={screens[currentScreen].title} />
        </div>
      </div>
      {interactive && (
        <div className="screen-indicators">
          {screens.map((_, index) => (
            <button
              key={index}
              className={cn("indicator", index === currentScreen && "active")}
              onClick={() => setCurrentScreen(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}`,
  },
  {
    id: "skeleton-loader",
    title: "Skeleton Loader",
    description: "Animated loading placeholders for better perceived performance",
    category: "Feedback",
    tags: ["Loading", "Animation", "UX"],
    component: SkeletonLoaderComponent,
    code: `interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animated?: boolean
}

export function Skeleton({ 
  className, 
  variant = 'text', 
  width, 
  height, 
  animated = true 
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton",
        variant === 'circular' && "rounded-full",
        variant === 'rectangular' && "rounded-md",
        variant === 'text' && "rounded h-4",
        animated && "animate-pulse",
        className
      )}
      style={{ width, height }}
    />
  )
}

export function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-32 w-full mb-4" />
        <Skeleton className="h-3 w-full mb-2" />
        <Skeleton className="h-3 w-2/3" />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    id: "interactive-form",
    title: "Interactive Form",
    description: "Form with real-time validation and smooth animations",
    category: "Input",
    tags: ["Forms", "Validation", "Animation"],
    component: InteractiveFormComponent,
    code: `interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea'
  required?: boolean
  validation?: (value: string) => string | null
}

interface InteractiveFormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, string>) => Promise<void>
  submitLabel?: string
}

export function InteractiveForm({ fields, onSubmit, submitLabel = "Submit" }: InteractiveFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  
  const validateField = (field: FormField, value: string) => {
    if (field.required && !value.trim()) {
      return \`\${field.label} is required\`
    }
    
    if (field.validation) {
      return field.validation(value)
    }
    
    return null
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await onSubmit(values)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name] || ''}
          error={touched[field.name] ? errors[field.name] : undefined}
          onChange={(value) => setValues(prev => ({ ...prev, [field.name]: value }))}
          onBlur={() => setTouched(prev => ({ ...prev, [field.name]: true }))}
        />
      ))}
      
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {submitLabel}
      </Button>
    </form>
  )
}`,
  },
  {
    id: "animated-counter",
    title: "Animated Counter",
    description: "Number counter with smooth animation and formatting options",
    category: "Display",
    tags: ["Animation", "Numbers", "Stats"],
    component: AnimatedCounterComponent,
    code: `interface AnimatedCounterProps {
  value: number
  duration?: number
  format?: (value: number) => string
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ 
  value, 
  duration = 2000, 
  format = (n) => n.toLocaleString(),
  prefix = '',
  suffix = '',
  className 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    const startTime = Date.now()
    const startValue = count
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)
      
      setCount(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, value, duration])
  
  return (
    <span ref={ref} className={className}>
      {prefix}{format(count)}{suffix}
    </span>
  )
}`,
  },
]

const categories = Array.from(new Set(components.map((c) => c.category)))

export function ComponentsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const filteredComponents =
    selectedCategory === "all" ? components : components.filter((c) => c.category === selectedCategory)

  const copyCode = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="focus-ring"
          >
            All Components
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="focus-ring"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Components Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{component.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {component.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {component.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="preview" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Preview
                      </TabsTrigger>
                      <TabsTrigger value="code" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Code
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="preview" className="mt-4">
                      <div className="p-6 bg-muted/20 rounded-lg border border-border/50">
                        <component.component />
                      </div>
                    </TabsContent>

                    <TabsContent value="code" className="mt-4">
                      <div className="relative">
                        <pre className="p-4 bg-muted/20 rounded-lg border border-border/50 text-sm overflow-x-auto">
                          <code>{component.code}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copyCode(component.code, component.id)}
                        >
                          {copiedCode === component.id ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
