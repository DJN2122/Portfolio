import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  soundwave,
  MedAssistLogo,
  math,
  movie,
  ads,
  AIB,
  ERGO,
  KS,
  EY,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Business Application Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Tester - Internship',
    company_name: 'AIB',
    icon: AIB,
    iconBg: '#333333',
    date: 'Sep 2017 - Nov 2017',
  },
  {
    title: 'Technology Consultant - Internship',
    company_name: 'EY',
    icon: EY,
    iconBg: '#333333',
    date: 'Jun 2022 - Jul 2022',
  },
  {
    title: 'QA Tester',
    company_name: 'Keywords Studios',
    icon: KS,
    iconBg: '#333333',
    date: 'Nov 2022 - May 2023',
  },
  {
    title: 'Junior Field Engineer',
    company_name: 'Ergo',
    icon: ERGO,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Music Visualiser with Java',
    description: 'This project creates five responsive audio visuals in Java, reacting to music elements like bass levels.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: soundwave,
    repo: 'https://github.com/DJN2122/OOP-2021-22-Assignment',
    demo: 'https://github.com/DJN2122/OOP-2021-22-Assignment',
  },
  {
    id: 'project-2',
    name: 'MedAssist',
    description:
      'MedAssist is a health chatbot that uses OpenAIs API for advice and geolocation-based facility guidance.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: MedAssistLogo,
    repo: 'https://github.com/DJN2122/MedAssistPWA',
    demo: 'https://github.com/DJN2122/MedAssistPWA',
  },
  {
    id: 'project-3',
    name: 'Pygame Space Invader',
    description: 'This project is a retro-style "Space Invader" game created in Python using the Pygame module, where a spaceship destroys enemies to progress.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/DJN2122/Pygame-Space-Invader',
    demo: 'https://github.com/DJN2122/Pygame-Space-Invader',
  },
  {
    id: 'project-4',
    name: 'Live Diary',
    description: `Live Diary app, developed in Java with Android Studio, is a streamlined note-taking app that uses digital sticky notes for organizing thoughts and memories by title, date, and time.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/DJN2122/MSD-Assignment-',
    demo: 'https://github.com/DJN2122/MSD-Assignment-',
  },
  {
    id: 'project-5',
    name: 'Auto Detailing Services',
    description:
      'This project was built by me, ensuring a fast, secure, and responsive website. I also implemented a user-friendly booking system, allowing clients to easily schedule their car detailing services online.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ads,
    repo: 'https://adsdetailing.ie/',
    demo: 'https://adsdetailing.ie/',
  },
];

export { services, technologies, experiences, projects };
