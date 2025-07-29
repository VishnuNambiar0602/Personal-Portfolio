export type Content = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  imageHint: string;
};

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
};

export const projects: Content[] = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "A full-stack e-commerce site with personalized recommendations using machine learning.",
    image: "https://placehold.co/600x400.png",
    link: "https://github.com",
    tags: ["Next.js", "TypeScript", "Python", "GenAI"],
    imageHint: "technology abstract",
  },
  {
    title: "Interactive Data Visualization Dashboard",
    description: "A real-time analytics dashboard for visualizing complex datasets with dynamic charts and graphs.",
    image: "https://placehold.co/600x400.png",
    link: "https://github.com",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    imageHint: "data dashboard",
  },
  {
    title: "Mobile-First Social Networking App",
    description: "A cross-platform mobile app designed to connect like-minded individuals through shared interests.",
    image: "https://placehold.co/600x400.png",
    link: "https://github.com",
    tags: ["React Native", "Firebase", "GraphQL"],
    imageHint: "social media",
  },
];

export const experiences: Content[] = [
  {
    title: "Senior Software Engineer, TechCorp",
    description: "Led the development of core features for a flagship product, mentored junior developers, and improved system architecture.",
    image: "https://placehold.co/600x400.png",
    link: "https://linkedin.com",
    tags: ["Leadership", "System Design", "Agile"],
    imageHint: "corporate office",
  },
  {
    title: "Full-Stack Developer, Innovate Inc.",
    description: "Developed and maintained web applications across the full stack, from UI/UX implementation to database management.",
    image: "https://placehold.co/600x400.png",
    link: "https://linkedin.com",
    tags: ["JavaScript", "SQL", "CI/CD", "DevOps"],
    imageHint: "startup workspace",
  },
  {
    title: "Software Development Intern, Solutions LLC",
    description: "Gained hands-on experience in a professional software development environment, contributing to bug fixes and feature enhancements.",
    image: "https://placehold.co/600x400.png",
    link: "https://linkedin.com",
    tags: ["Internship", "Teamwork", "Problem Solving"],
    imageHint: "team meeting",
  },
];
