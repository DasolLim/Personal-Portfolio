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
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
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
    title: 'AI Developer',
    icon: ux,
  },
  {
    title: 'Quality Assurance',
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
    name: 'Redux Toolkit',
    icon: redux,
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
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
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
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Sterilization Technician',
    company_name: 'Wonder West Orthodontics',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2021 - Aug 2021',
  },
  {
    title: 'Dental Receptionist',
    company_name: 'Wonder West Orthodontics',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2022 - Aug 2022',
  },
  {
    title: 'C Software Developer',
    company_name: 'Sunstang Solar Car Project',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Software Developer',
    company_name: 'Elkor Technologies Inc',
    icon: dcc,
    iconBg: '#333333',
    date: 'May 2023 - Sept 2023',
  },
  {
    title: 'Software Developer',
    company_name: 'IBM X WCS',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2023 - Feb 2024',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Elkor Technologies',
    description: 'Full stack web development for Elkors new website',
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
    image: komikult,
    demo: 'https://www.elkor.net/',
  },
  {
    id: 'project-2',
    name: 'Stock Prediction',
    description:
      'AI-powered stock prices prediction with Twitter sentimental analysis',
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
    image: leaderboard,
    repo: 'https://github.com/DasolLim/Twitter-Finance-Project',
  },
  {
    id: 'project-3',
    name: 'CHEER Website',
    description: 'A community-driven platform for non profitable organization that supports families and friends of individuals with intellectual disabilitie',
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
    repo: 'https://github.com/ShaimaaAliECE/se3350-project-group22',
    demo: 'https://se3350-project-group22-u6a2qlor5a-uk.a.run.app/',
  },
  {
    id: 'project-4',
    name: 'Superhero Hub',
    description: 'A dynamic platform tp search for superheroes, create and save personalized lists, and share reviews',
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
    repo: 'https://github.com/DasolLim/MERN_Project',
  },
  {
    id: 'project-5',
    name: 'Graphical Sorting',
    description:
      'A visual demonstration of selection and merge sorting method',
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
    image: nyeusi,
    repo: 'https://github.com/DasolLim/SortingGraphicalApplication_Project',
  },
];

export { services, technologies, experiences, projects };