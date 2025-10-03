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
      duration: 'Sep 2024 - Sep 2025 (~1 year)',
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
    {
      company: 'Edumize Sdn. Bhd.',
      role: 'Graphic Designer and Social Media manager',
      duration: 'Mar 2023 - Mar 2024',
      location: 'Johor, Malaysia',
      description:
        "As a Graphic Designer and Social Media Manager at Edumize Sdn. Bhd., I spent that year creating visually compelling graphics and developing engaging content to enhance our brand's online presence. My responsibilities included designing marketing materials, managing social media accounts, and making strategic campaigns that boosted audience engagement and increased our follower base. Additionally, I collaborated closely with the marketing team to ensure brand consistency and executed data-driven strategies to optimize our social media performance.",
      achievements: [
        'Designed marketing collateral and social media assets',
        'Managed content calendar and increased audience engagement',
        'Collaborated with marketing to maintain brand consistency',
        'Used analytics to iterate and optimize campaign performance',
      ],
      technologies: ['Instagram', 'Figma', 'Canva', 'Social Media Analytics'],
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
      year: '2021 - 2025',
      location: 'Malaysia',
    },
  ],
}
