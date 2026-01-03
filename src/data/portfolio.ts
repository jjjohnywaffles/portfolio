import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Jonathan Hu',
  tagline: 'CU Boulder Bachelors in Applied Computer Science • NYU Bachelors in Applied Psychology',
  bio: "I'm a Software Engineer at Matrices, focused on building reliable and performant web applications. I work across the stack with TypeScript and React (Next.js), PostgreSQL, and modern tooling, with a strong foundation in Python, SQL, C, and C++.",
  description:
    "I'm also passionate about data analytics and data science. Deriving insights from complex datasets, creating clear visualizations, and applying machine learning where it adds value. I enjoy solving complex problems end-to-end—from data modeling and APIs to front-end UX—while keeping solutions maintainable and user-focused. My background in Applied Computer Science and Psychology helps me bridge analytics and product engineering to deliver practical, thoughtful software.",

  contact: {
    phone: '916-960-3725',
    email: 'jonathan.q.hu@gmail.com',
    website: 'jjjohnywaffles.github.io',
  },

  education: [
    {
      id: 'cu-boulder',
      period: '2023 - 2024',
      degree: 'Bachelor of Applied Computer Science',
      school: 'University of Colorado Boulder',
      location: 'Boulder, Colorado',
      coursework:
        'Datamining, Data Structures, Computer Systems, Data Science Algorithms, Database Design, Discrete Structures, Algorithms, Information Visualization, Software Development, Principles of Programming',
    },
    {
      id: 'nyu',
      period: '2019 - 2022',
      degree: 'Bachelor of Applied Psychology',
      minor: 'Minor in Computer Science',
      school: 'New York University',
      location: 'New York City, New York',
      coursework:
        'Operating Systems, Computer Systems Orgs, Data Structures, Algorithms, Research Methods',
    },
    {
      id: 'highschool',
      period: '2014 - 2018',
      degree: 'High School Diploma',
      school: 'Miraloma High School',
      location: 'Carmichael, California',
      coursework: 'General Education',
    },
  ],

  skills: [
    ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'],
    ['Zustand', 'Tailwind CSS', 'Drizzle ORM', 'Zod', 'PostgreSQL'],
    ['SQL', 'Python', 'MongoDB', 'Git', 'Tableau'],
  ],

  experience: [
    {
      id: 'matrices',
      period: '2025 - Present',
      title: 'Software Engineer',
      company: 'Matrices',
      location: 'San Francisco, CA',
      points: [
        'Delivered full-stack web features using TypeScript, React (Next.js), Zustand, and Tailwind',
        'Built type-safe APIs and data layers with Drizzle ORM + PostgreSQL and Zod validation; added resilient loading/error states and telemetry',
        'Improved performance via memoized selectors, minimized re-renders, and virtualization; enhanced responsiveness across complex views',
        'Increased reliability and developer velocity with reusable UI patterns, feature flags, and stricter TypeScript',
      ],
    },
    {
      id: 'acts',
      period: '2021 - 2023',
      title: 'Data Analyst',
      company: 'Advocacy and Community-Based Trauma Studies (ACTS) Lab',
      location: 'New York, NY',
      points: [
        'Developed Python scripts for advanced data preprocessing and applied statistical and machine learning techniques',
        'Collaborated with teams to analyze interview transcripts, uncovering key themes for trauma treatment strategies',
        'Designed Python-based tools to automate data recording, significantly boosting efficiency',
      ],
    },
    {
      id: 'lilo',
      period: '2021 - 2022',
      title: 'Data Analyst Intern',
      company: 'Lilo',
      location: 'New York, NY',
      points: [
        'Designed programs for user base analysis, enhancing insights and operational efficiency',
        'Created dynamic visualizations in Python and Tableau, guiding executive decision-making',
        'Analyzed user trends and engagement metrics, improving user experience',
      ],
    },
    {
      id: 'pnda',
      period: '2020 - 2021',
      title: 'Graphic Designer and Social Media Manager',
      company: 'PNDA LahiArts',
      location: 'Sacramento, CA',
      points: [
        'Designed graphics for social media campaigns, promoting events and Asian arts awareness',
        'Coordinated event planning and graphic design tasks with team members',
        'Improved brand visibility and streamlined communication processes',
      ],
    },
  ],

  portfolioProjects: [
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Data analysis functions and utilities',
      link: 'https://github.com/jjjohnywaffles/Data-Analysis-Functions',
      category: 'portfolio',
    },
    {
      id: 'database',
      title: 'Database Design',
      description: 'Database design projects',
      link: 'https://github.com/jjjohnywaffles/Database',
      category: 'portfolio',
    },
    {
      id: 'algorithms',
      title: 'Algorithms',
      description: 'Algorithm implementations',
      link: 'https://github.com/jjjohnywaffles/Algorithms',
      category: 'portfolio',
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Software development projects',
      link: 'https://github.com/KatieWoe/bbcourts',
      category: 'portfolio',
    },
    {
      id: 'app-dev',
      title: 'App Development',
      description: 'Mobile app development',
      link: 'https://github.com/jjjohnywaffles/FoodFinder',
      category: 'portfolio',
    },
  ],

  interactiveProjects: [
    {
      id: 'flappy-bird',
      title: 'Flappy Bird',
      description: 'Classic flappy bird game clone',
      link: 'https://jjjohnywaffles.github.io/interactive_projects/FlappyBird/flappybird.html',
      category: 'interactive',
    },
    {
      id: 'card-centering',
      title: 'Card Centering Calculator',
      description: 'Tool for calculating card centering grades',
      link: 'https://jjjohnywaffles.github.io/interactive_projects/CardCentering/cardcentering.html',
      category: 'interactive',
    },
    {
      id: 'code-optimizer',
      title: 'Code Optimizer',
      description: 'Python code optimization tool',
      link: 'https://github.com/jjjohnywaffles/Python-Code-Optimizer/tree/main',
      category: 'interactive',
    },
  ],

  socialLinks: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/jjjohnywaffles',
      icon: 'github',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jonathan-q-hu/',
      icon: 'linkedin',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://www.youtube.com/@JohnyHV2',
      icon: 'youtube',
    },
    {
      id: 'handshake',
      name: 'Handshake',
      url: 'https://app.joinhandshake.com/profiles/46717508',
      icon: 'handshake',
    },
  ],
};
