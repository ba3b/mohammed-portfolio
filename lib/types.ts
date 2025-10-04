export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  featuredImage: string
  images: string[]
  github?: string
  demo?: string
  playstore?: string
  appstore?: string
  status: 'completed' | 'in-progress' | 'planned'
  timeline: string
  role: string
  technologies: string[]
  highlights: string[]
  metrics?: {
    label: string
    value: string
  }[]
}

export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  category: 'mobile' | 'frontend' | 'backend' | 'tools' | 'design'
  proficiency: 'expert' | 'proficient' | 'competent' | 'beginner'
  icon?: string
}

export interface ResumeData {
  name: string
  title: string
  location: string
  email: string
  phone?: string
  website: string
  summary: string
  experience: Experience[]
  skills: Skill[]
  education: {
    degree: string
    school: string
    year: string
    location: string
  }[]
}
