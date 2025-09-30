import type { ResumeData } from '@/lib/types'

export const resumeData: ResumeData = {
  name: 'Mohammed Baabbad',
  title: 'Mobile Application Developer',
  location: 'Saudi Arabia',
  email: 'mbaabad1234@gmail.com',
  website: 'https://mohammed-baabbad.vercel.app',
  summary:
    'Mobile Application Developer building production apps with React Native and Flutter. UI-led, performance-first, production-ready solutions with nearly 1 year of professional experience.',
  experience: [
    {
      company: 'Ventionex Sdn. Bhd.',
      role: 'Full Stack Mobile Application Developer',
      duration: '2024 - Present (~1 year)',
      location: 'Malaysia',
      description: 'Led UI/UX and frontend implementation for in-house SOP management application',
      achievements: [
        'Created timeline components, ActionDialog, and View/Edit SOP screens',
        'Built interactive Resolution pages with complex state management',
        'Managed Expo SDK upgrades and ensured cross-platform consistency',
        'Implemented responsive designs and optimized performance',
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'UI/UX Design'],
    },
  ],
  skills: [
    { name: 'React Native', category: 'mobile', proficiency: 90 },
    { name: 'Expo', category: 'mobile', proficiency: 85 },
    { name: 'Flutter', category: 'mobile', proficiency: 75 },
    { name: 'TypeScript', category: 'frontend', proficiency: 85 },
    { name: 'JavaScript', category: 'frontend', proficiency: 90 },
    { name: 'React', category: 'frontend', proficiency: 85 },
    { name: 'Next.js', category: 'frontend', proficiency: 80 },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 85 },
    { name: 'UI/UX Design', category: 'design', proficiency: 80 },
    { name: 'Git', category: 'tools', proficiency: 85 },
    { name: 'Figma', category: 'design', proficiency: 75 },
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'UTM',
      year: '2025',
      location: 'Malaysia',
    },
  ],
}
