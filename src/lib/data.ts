
export type Content = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  imageHint: string;
};

export const siteData = {
  // Hero Section Content
  hero: {
    title: 'AI & ML Engineering Student',
    subtitle: 'Pursuing a B.Tech in Artificial Intelligence and Machine Learning at CHRIST University, Bangalore, with a strong passion for emerging technologies and real-world problem-solving.',
  },
  // About Section Content
  about: {
    title: 'About Me',
    description: "Driven by curiosity and a commitment to continuous learning, I actively seek opportunities to expand my expertise. With a solid foundation in AI and ML, I am eager to apply my skills in innovation and data-driven solutions to make a meaningful impact in the evolving tech landscape.",
    skillsTitle: 'My Skills',
    skills: [
      'C++', 'C', 'SQL', 'Python', 'VScode', 'Microsoft Excel', 
      'Oracle VM machines', 'Flutter', 'Figma', 'Google Applications', 
      'Data Science', 'Data Analytics', 'PyTorch', 'Tensorflow', 'OpenCV',
      'Communication', 'Project Management', 'Team Management', 'Time management',
      'Strategic Thinking', 'Public Relations', 'Leadership', 'Creative thinking',
      'Adaptability', 'Problem Solving'
    ],
  },
  // Projects Section Content
  projects: {
    title: 'Featured Projects',
    description: "Here are some of the projects I'm proud to have worked on.",
  },
  // Experience Section Content
  experience: {
    title: 'My Experience',
    description: 'A timeline of my professional journey and key roles.',
  },
  // Education Section Content
  education: {
    title: 'Education',
    description: 'My academic background and qualifications.',
  },
  // Contact Section Content
  contact: {
    title: 'Get in Touch',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.",
  },
  // Header Navigation Links
  header: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    title: "Vishnu Nambiar",
  },
  // Social Media Links
  socialLinks: {
    github: "https://github.com/vishnunambiar06",
    linkedin: "https://linkedin.com/in/vishnunambiar",
    instagram: "https://www.instagram.com/vishnu_0602?igsh=dDk4cWJzaWZvdWo2",
  },
  // Content for the Projects section
  projectsContent: [
    {
      title: "Piezo-Electric Power Generator",
      description: "Developed a piezoelectric material-based power generator to convert mechanical stress into electrical energy. Optimized material deposition techniques, increasing generated current by 20% and improving energy conversion efficiency.",
      image: "https://placehold.co/600x400.png",
      link: "https://github.com",
      tags: ["Piezoelectricity", "Energy Conversion", "Material Science"],
      imageHint: "electric circuit",
    },
    {
      title: "Restaurant Management using Machine Learning",
      description: "Implemented ML models to improve sales forecasting, optimize resource allocation, and enhance customer experience. Utilized ARIMA, Random Forest, and Gradient Boosting models for data analysis.",
      image: "https://placehold.co/600x400.png",
      link: "https://github.com",
      tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
      imageHint: "data analysis",
    },
  ] as Content[],
  // Content for the Experience section
  experiencesContent: [
    {
      title: "Student Head, CHRIST Incubation and Consulting Foundation (June 2024 - Dec 2024)",
      description: "Led 14+ projects, including 3+ international initiatives across AI and web development. Improved efficiency by 30% and enhanced intern recruitment by 40% for 150+ interns.",
      image: "https://placehold.co/600x400.png",
      link: "https://linkedin.com",
      tags: ["Leadership", "Project Management", "AI", "Web Development"],
      imageHint: "leadership team",
    },
    {
      title: "Chief Editor, INICIA (June 2024 - March 2025)",
      description: "Enhanced club visibility by 50% through strategic branding and creative oversight of 10+ projects. Boosted social media engagement by 40% with targeted content.",
      image: "https://placehold.co/600x400.png",
      link: "https://linkedin.com",
      tags: ["Branding", "Content Strategy", "Social Media"],
      imageHint: "creative content",
    },
    {
      title: "Industry Learning Intern, Tata Consultancy Services (TCS) (April 2025 - May 2025)",
      description: "Focused on inclusive mobile app development using Flutter. Contributed to UI/UX design, feature testing, and conducted market research on accessibility solutions.",
      image: "https://placehold.co/600x400.png",
      link: "https://linkedin.com",
      tags: ["Flutter", "Mobile Development", "UI/UX", "Accessibility"],
      imageHint: "mobile app",
    },
  ] as Content[],
    // Content for the Education section
  educationsContent: [
    {
      title: "CHRIST University, Bangalore (June 2023 - May 2027)",
      description: "B.Tech in Artificial Intelligence and Machine Learning. Gaining expertise in AI/ML through hands-on projects and industry-relevant research. Proficient in Python, TensorFlow, PyTorch, and data analytics.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["B.Tech", "AI", "Machine Learning", "Python"],
      imageHint: "university campus",
    },
    {
      title: "Army Public School, Kannur (May 2021 - May 2023)",
      description: "High School, Computer Science. Gained a solid foundation in programming and problem-solving, developing strong analytical and computational skills.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["High School", "Computer Science", "Programming"],
      imageHint: "school building",
    },
  ] as Content[],
};
