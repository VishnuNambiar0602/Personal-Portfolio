// src/lib/data.ts

export type Content = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  imageHint: string;
};

/**
 * The main configuration object for the entire website.
 * This object is used to populate all the content on the site.
 * Changing the values here will update the corresponding sections on the website.
 */
export const siteData = {
  // Hero Section Content: Used for the main landing page hero section.
  hero: {
    title: 'With great code comes great bugs',
    subtitle: '...I am here for neither',
  },
  // About Section Content: Used for the "About Me" section.
  about: {
    title: 'About Me',
    description: "Driven by curiosity and a commitment to continuous learning, I actively seek opportunities to expand my expertise. With a solid foundation in AI and ML, I am eager to apply my skills in innovation and data-driven solutions to make a meaningful impact in the evolving tech landscape.",
    // Replace this with a direct link to your photo from a service like Imgur. See the README for more info.
    image: "https://i.postimg.cc/tJvM2p1q/Vishnu.jpg",
    skillsTitle: 'My Skills',
    
    // Skills are now categorized. The about-section component will render them with a toggle.
    skills: {
      technical: [
        'C++', 'C', 'SQL', 'Python', 'VScode', 'Microsoft Excel', 
        'Oracle VM machines', 'Flutter', 'Figma', 'Google Applications', 
        'Data Science', 'Data Analytics', 'PyTorch', 'Tensorflow', 'OpenCV'
      ],
      soft: [
        'Communication', 'Project Management', 'Team Management', 'Time management',
        'Strategic Thinking', 'Public Relations', 'Leadership', 'Creative thinking',
        'Adaptability', 'Problem Solving'
      ]

    }
  },
  // Projects Section Content: Used for the "Featured Projects" section.
  projects: {
    title: 'Featured Projects',
    description: "Here are some of the projects I'm proud to have worked on.",
  },
  // Experience Section Content: Used for the "My Experience" section.
  experience: {
    title: 'My Experience',
    description: 'A timeline of my professional journey and key roles.',
  },
  // Education Section Content: Used for the "Education" section.
  education: {
    title: 'Education',
    description: 'My academic background and qualifications.',
  },
  // Hire Me Section Content: Used for the "Hire Me" section.
  hireMe: {
    title: 'Hire Me',
    description: 'I offer a range of services to help you achieve your goals.',
    services: [
      {
        title: 'Website Development',
        description: 'Creating responsive and dynamic websites tailored to your needs.',
      },
      {
        title: 'Content Writing',
        description: 'Producing high-quality, engaging content for your brand.',
      },
      {
        title: 'AI & ML Domain',
        description: 'Leveraging artificial intelligence and machine learning to build smart solutions.',
      },
      {
        title: 'Data Science',
        description: 'Analyzing and interpreting complex data to drive insights and decisions.',
      },
    ],
  },
  // Contact Section Content: Used for the "Get in Touch" section.
  contact: {
    title: 'Get in Touch',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.",
  },
  // Header Navigation Links: Used for the main navigation bar.
  header: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#hire-me", label: "Hire Me" },
      { href: "#contact", label: "Contact" },
    ],
    title: "Vishnu Nambiar",
  },
  // Social Media Links: Used in the header and contact sections.
  socialLinks: {
    github: "https://github.com/VishnuNambiar0602",
    linkedin: "https://www.linkedin.com/in/vishnu-nambiar-27b120288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/vishnu_0602?igsh=dDk4cWJzaWZvdWo2",
  },
  // Content for the Projects section: An array of project objects.
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
    {
      title: "AI Lead Agent",
      description: "This is an AI agent created with the help of Google Gemini which acts as the brain and sends our cold emails to potential clients.",
      image: "https://placehold.co/600x400.png",
      link: "https://github.com/VishnuNambiar0602/ai-lead-agent",
      tags: ["AI", "Gemini", "Python", "Email Automation"],
      imageHint: "AI agent",
    },
  ] as Content[],
  // Content for the Experience section: An array of experience objects.
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
      description: "Gained hands-on experience in inclusive mobile app development using Flutter. Contributed to UI/UX design, conducted feature testing, and researched accessibility solutions to enhance user experience.",
      image: "https://placehold.co/600x400.png",
      link: "https://linkedin.com",
      tags: ["Flutter", "Mobile Development", "UI/UX", "Accessibility"],
      imageHint: "mobile app",
    },
  ] as Content[],
    // Content for the Education section: An array of education objects.
  educationsContent: [
    {
      title: "CHRIST University, Bangalore (June 2023 - May 2027)",
      description: "Pursuing a B.Tech in Artificial Intelligence and Machine Learning. Gaining expertise in AI/ML through hands-on projects and industry-relevant research. Proficient in Python, TensorFlow, and PyTorch.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["B.Tech", "AI", "Machine Learning", "Python"],
      imageHint: "university campus",
    },
    {
      title: "Army Public School, Kannur (May 2021 - May 2023)",
      description: "Completed High School with a focus on Computer Science. Built a solid foundation in programming and problem-solving, developing strong analytical and computational skills.",
      image: "https://placehold.co/600x400.png",
      link: "#",
      tags: ["High School", "Computer Science", "Programming"],
      imageHint: "school building",
    },
  ] as Content[],
};
