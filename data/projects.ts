import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    slug: "sop-management-app",
    title: "SOP Management Application",
    description: "Enterprise mobile app for Standard Operating Procedures management",
    longDescription:
      "Led the frontend development of a comprehensive SOP management application for Ventionex Sdn. Bhd. The app features complex timeline components, interactive dialogs, and a sophisticated resolution system.",
    tags: ["React Native", "Expo", "TypeScript", "UI/UX"],
    featuredImage: "/images/projects/sop-app-hero.png",
    images: [
      "/images/projects/sop-timeline.png",
      "/images/projects/sop-dialog.png",
      "/images/projects/sop-resolution.png",
    ],
    status: "completed",
    timeline: "6 months",
    role: "Frontend Lead & UI/UX Designer",
    technologies: ["React Native", "Expo SDK", "TypeScript", "React Navigation", "Async Storage"],
    highlights: [
      "Built reusable timeline component with horizontal and vertical modes",
      "Created ActionDialog system with skeleton loading states",
      "Implemented complex resolution page with multi-step workflows",
      "Managed Expo SDK upgrades across development cycle",
    ],
    metrics: [
      { label: "Performance Score", value: "95+" },
      { label: "Cross-platform", value: "iOS & Android" },
      { label: "Load Time", value: "<2s" },
    ],
  },
  {
    slug: "fyp-project",
    title: "Final Year Project (FYP)",
    description: "Academic project showcasing advanced mobile development concepts",
    longDescription:
      "University capstone project demonstrating comprehensive mobile application development skills. Currently under development with planned features for advanced UI interactions and backend integration.",
    tags: ["Academic", "React Native", "Research"],
    featuredImage: "/images/projects/fyp-hero.png",
    images: ["/images/projects/fyp-preview.png"],
    github: "https://drive.google.com/file/d/1fkGSi9838XaezjUeZ2Q_inK7oH51Q3Ga/view?usp=sharing",
    status: "in-progress",
    timeline: "Ongoing",
    role: "Solo Developer & Researcher",
    technologies: ["React Native", "Node.js", "Database Integration"],
    highlights: [
      "Research-focused mobile application development",
      "Advanced UI/UX implementation",
      "Backend integration planning",
      "Academic documentation and presentation",
    ],
  },
  {
    slug: "openmp-lab",
    title: "OpenMP C++ Laboratory",
    description: "Academic demonstration of parallel programming concepts",
    longDescription:
      "Laboratory project showcasing OpenMP parallel programming techniques in C++. Demonstrates understanding of concurrent programming and performance optimization.",
    tags: ["C++", "OpenMP", "Academic", "Performance"],
    featuredImage: "/images/projects/openmp-hero.png",
    images: ["/images/projects/openmp-code.png"],
    status: "completed",
    timeline: "1 semester",
    role: "Developer & Researcher",
    technologies: ["C++", "OpenMP", "Performance Analysis"],
    highlights: [
      "Parallel algorithm implementation",
      "Performance benchmarking and analysis",
      "Multi-threading optimization techniques",
      "Academic research documentation",
    ],
  },
]
