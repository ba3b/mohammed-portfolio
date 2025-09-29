import type { ResumeData } from "@/lib/types"

export const resumeData: ResumeData = {
  name: "Mohammed Baabad",
  title: "Mobile Application Developer",
  location: "Malaysia",
  email: "mohammed.baabad@example.com", // TODO: Replace with actual email
  website: "https://mohammed-baabad.vercel.app",
  summary:
    "Mobile Application Developer building production apps with React Native (Expo) and Flutter. UI-led, performance-first, production-ready solutions with nearly 1 year of professional experience.",
  experience: [
    {
      company: "Ventionex Sdn. Bhd.",
      role: "Full Stack Mobile Application Developer",
      duration: "2024 - Present (~1 year)",
      location: "Malaysia",
      description: "Led UI/UX and frontend implementation for in-house SOP management application",
      achievements: [
        "Created timeline components, ActionDialog, and View/Edit SOP screens",
        "Built interactive Resolution page with complex state management",
        "Managed Expo SDK upgrades and ensured cross-platform consistency",
        "Implemented skeleton loading states and optimized app performance",
      ],
      technologies: ["React Native", "Expo", "TypeScript", "UI/UX Design"],
    },
  ],
  skills: [
    { name: "React Native", category: "mobile", proficiency: 90 },
    { name: "Expo", category: "mobile", proficiency: 85 },
    { name: "Flutter", category: "mobile", proficiency: 75 },
    { name: "TypeScript", category: "frontend", proficiency: 85 },
    { name: "JavaScript", category: "frontend", proficiency: 90 },
    { name: "React", category: "frontend", proficiency: 85 },
    { name: "Next.js", category: "frontend", proficiency: 80 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 85 },
    { name: "UI/UX Design", category: "design", proficiency: 80 },
    { name: "Git", category: "tools", proficiency: 85 },
    { name: "Figma", category: "design", proficiency: 75 },
  ],
  education: [
    {
      degree: "Bachelor's Degree", // TODO: Replace with actual degree
      school: "University Name", // TODO: Replace with actual university
      year: "2024", // TODO: Replace with actual year
      location: "Malaysia",
    },
  ],
}
