import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'mobile-unified-platform',
    title: 'Mobile Unified Platform',
    description:
      'A comprehensive enterprise mobile application designed to streamline client management by centralizing Standard Operating Procedures (SOPs), facilitating structured action dialogs and enabling seamless video calls.',
    longDescription:
      'Participated in the development of a comprehensive mobile application for Ventionex Sdn. Bhd. The app features complex timeline components, interactive dialogs, chat and video call systems, and a sophisticated resolution system.',
    tags: ['React Native', 'Flask', 'TypeScript', 'WebRTC', 'Expo', 'PostgreSQL'],
    featuredImage: '/images/projects/sop-app-hero.png',
    images: [
      '/images/projects/sop-timeline.jpg',
      '/images/projects/sop-dialog.jpg',
      '/images/projects/sop-resolution.jpg',
      '/images/projects/sop-chat.jpg',
    ],
    playstore:
      'https://play.google.com/store/apps/details?id=com.dev_simpnify.mobilesimpleunifiedplatform',
    timeline: '1 year',
    role: 'Full Stack Mobile Engineer',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Flask',
      'PostgreSQL',
      'WebRTC',
      'SignalR',
      'GPS',
      'RESTful APIs',
    ],
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
      { label: 'Cross-platform', value: 'iOS & Android' },
      { label: 'Development Time', value: '1 Year' },
      { label: 'Modules Delivered', value: '4+' },
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
    images: ['/images/projects/fyp-preview.png', '/images/projects/fyp-call.png'],
    github: 'https://github.com/ba3b/Virtual-Clinic-System',
    demo: 'https://drive.google.com/file/d/1fkGSi9838XaezjUeZ2Q_inK7oH51Q3Ga/view?usp=sharing',
    timeline: 'Mar - Jul 2025',
    role: 'Solo Developer & Researcher',
    technologies: ['Flutter', 'Dart', 'Firestore', 'Agora SDK', 'Firebase Auth'],
    highlights: [
      'Designed appointment booking for physical, virtual, and vaccination visits',
      'Integrated chat and calling features for patient-doctor communication',
      'Implemented medical history tracking and digital prescriptions',
      'Focused on accessibility and responsive UI for healthcare workflows',
    ],
    metrics: [
      { label: 'Development Time', value: '5 Months' },
      { label: 'User Types', value: '3 Different' },
      { label: 'Platform', value: 'Cross-platform' },
    ],
  },
  {
    slug: 'utmdash',
    title: 'UTMDash',
    description:
      'An application to organize shipments inside UTM, automating warehouse processes and solving parcel delivery challenges for campus students.',
    longDescription:
      'This project aims to automate all processes for the warehouse inside UTM. The application is designed to solve a substantial problem faced by UTM students who live inside campus since there is nowhere where they can receive the parcels. As a result, I and my team have developed an application that solves the entire problem and automates all manual processes.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Automation'],
    featuredImage: '/images/projects/utmdash.jpg',
    images: ['/images/projects/utmdash-2.jpg', '/images/projects/utmdash-3.jpg'],
    github: 'https://github.com/NotWai/UTMDash',
    timeline: 'Oct 2023 - Feb 2024',
    role: 'Developer & Team Member',
    technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Authentication'],
    highlights: [
      'Automated warehouse processes for shipment organization',
      'Solved parcel delivery challenges for campus students',
      'Implemented comprehensive shipment tracking system',
      'Built user-friendly interface for students and warehouse staff',
      'Integrated Firebase for real-time data management',
      'Developed authentication system for secure access',
    ],
    metrics: [
      { label: 'Development Time', value: '5 Months' },
      { label: 'Platform', value: 'Cross-platform' },
      { label: 'User Types', value: 'Students & Staff' },
    ],
  },
]
