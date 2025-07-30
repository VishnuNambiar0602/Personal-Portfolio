
export type Content = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  imageHint: string;
};

export const siteData = {
  hero: {
    title: '"With great codes comes great bugs"',
    subtitle: '...and I am here for neither.',
  },
  about: {
    title: 'About Me',
    description: "I'm a passionate and creative developer with a knack for building beautiful, functional, and user-friendly web applications. With a strong foundation in modern web technologies, I love turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
    skillsTitle: 'My Skills',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  projects: {
    title: 'Featured Projects',
    description: "Here are some of the projects I'm proud to have worked on.",
  },
  experience: {
    title: 'My Experience',
    description: 'A timeline of my professional journey and key roles.',
  },
  contact: {
    title: 'Get in Touch',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.",
  },
  header: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    title: "My Digital Stage",
  },
  socialLinks: {
    github: "https://github.com/VishnuNambiar0602",
    linkedin: "https://www.linkedin.com/in/vishnu-nambiar-27b120288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/vishnu_0602?igsh=dDk4cWJzaWZvdWo2",
  },
  projectsContent: [
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
  ] as Content[],
  experiencesContent: [
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
  ] as Content[],
};
