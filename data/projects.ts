import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'mobile-unified-platform',
    title: 'Mobile Unified Platform',
    description:
      'Enterprise mobile app for managing client SOPs, workflows, action dialogs, video calls, and more',
    longDescription:
      'Participated in the development of a comprehensive mobile application for Ventionex Sdn. Bhd. The app features complex timeline components, interactive dialogs, chat and video call systems, and a sophisticated resolution system.',
    tags: ['React Native', 'Python', 'TypeScript', 'WebRTC', 'Expo', 'PostgreSQL'],
    featuredImage: '/images/projects/sop-app-hero.png',
    images: [
      '/images/projects/sop-timeline.png',
      '/images/projects/sop-dialog.png',
      '/images/projects/sop-resolution.png',
    ],
    status: 'completed',
    timeline: '1 year',
    role: 'Full Stack Mobile Application Developer',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Python', 'PostgreSQL', 'WebRTC'],
    highlights: [
      'Helped build a unified mobile platform from scratch',
      'Developed the Authentication module',
      'Built the SOP Management module',
      'Created the QR Code Scanner module',
      'Implemented GPS Control page and service',
      'Optimized UI performance and list rendering',
      'Enhanced the Chats module for smoother use',
      'Delivered reusable, scalable components',
      'Ensured cross-platform consistency',
    ],
    metrics: [
      { label: 'Performance Score', value: '95+' },
      { label: 'Cross-platform', value: 'iOS & Android' },
      { label: 'Load Time', value: '<2s' },
    ],
  },
  {
    slug: 'fyp-project',
    title: 'Virtual Clinic System',
    description:
      'Comprehensive mobile healthcare app enabling patients to book physical, virtual, and vaccination appointments with integrated chat and calling features.',
    longDescription:
      'Comprehensive mobile healthcare app enabling patients to book physical, virtual, and vaccination appointments with integrated chat/calling features, medical history tracking, and digital prescription management.',
    tags: ['Flutter', 'Healthcare', 'Agora'],
    featuredImage: '/images/projects/fyp-hero.png',
    images: ['/images/projects/fyp-preview.png'],
    status: 'in-progress',
    timeline: 'Mar - Jul 2025',
    role: 'Solo Developer & Researcher',
    technologies: ['Flutter', 'Firebase', 'Agora SDK', 'TypeScript'],
    highlights: [
      'Designed appointment booking for physical, virtual, and vaccination visits',
      'Integrated chat and calling features for patient-doctor communication',
      'Implemented medical history tracking and digital prescriptions',
      'Focused on accessibility and responsive UI for healthcare workflows',
    ],
  },
  {
    slug: 'openmp-lab',
    title: 'OpenMP C++ Laboratory',
    description: 'Academic demonstration of parallel programming concepts',
    longDescription:
      'Laboratory project showcasing OpenMP parallel programming techniques in C++. Demonstrates understanding of concurrent programming and performance optimization.',
    tags: ['C++', 'OpenMP', 'Academic', 'Performance'],
    featuredImage: '/images/projects/openmp-hero.png',
    images: ['/images/projects/openmp-code.png'],
    status: 'completed',
    timeline: '1 semester',
    role: 'Developer & Researcher',
    technologies: ['C++', 'OpenMP', 'Performance Analysis'],
    highlights: [
      'Parallel algorithm implementation',
      'Performance benchmarking and analysis',
      'Multi-threading optimization techniques',
      'Academic research documentation',
    ],
  },
]
