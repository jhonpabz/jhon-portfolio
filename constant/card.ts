import Jhonshoppe from '@/assets/project-jhonshoppe-nuxt.jpg';
import AIAssociate from '@/assets/project-ai-associate.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'JHONSHOPPE',
    description: 'E-commerce web app using Nuxt JS + Supabase Authentication.',
    image: Jhonshoppe,
    stacks: ['Vue', 'Nuxt Js', 'Typescript', 'Tailwind', 'Supabase '],
    siteUrl: 'https://jhonshoppe.netlify.app/',
    githubUrl: 'https://github.com/jhonpabz/jhonshoppe',
  },
  {
    id: 2,
    title: 'AI Associate',
    description:
      'AI Associate with Next 13, React, Prisma, Tailwind, shad/cn UI. Authentication using Clerk and Open AI for API',
    image: AIAssociate,
    stacks: ['Next 13', 'React', 'Prisma', 'Tailwind', 'Clerk'],
    githubUrl: 'https://github.com/jhonpabz/ai-associate',
  },
];

export const experienceData = [
  {
    workPeriod: 'JUNE 2023 — PRESENT',
    title: 'Front End Developer • SK Innovative Group (PHILTECH)',
    description:
      'Develop, maintain, and test new and existing projects using React, Nextjs, Nuxtjs, Vue, Es6 Javascript, Tailwind, CSS, Sass.',
    date: '2019 - 2022',
    stacks: [
      'Nextjs',
      'React',
      'Nuxtjs',
      'Vue',
      'Typescript',
      'Tailwind',
      'CSS',
      'Sass',
    ],
    siteUrl:
      'https://www.linkedin.com/company/philtech-info-service-inc/mycompany/',
  },
  {
    workPeriod: 'MARCH 2022 — JUNE 2023',
    title: 'Associate Software Engineer • Fligno Software Philippines Inc',
    description:
      'Design, develop, and test new and existing projects using the latest technologies(React). Apply best practice development patterns and follow design briefs, Continuous Integration/Development, and maintenance of code.',
    date: '2019 — 2022',
    stacks: [
      'React',
      'Typescript',
      'Next JS',
      'Node',
      'Express',
      'MongoDB',
      'Redux',
      'Zustand',
      'Material UI',
      'Tailwind',
    ],
    siteUrl: 'https://fligno.com/',
  },
  {
    workPeriod: 'AUGUST 2019 — FEB 2022',
    title: 'Web Designer/Developer • Directories Philippines Corporation',
    description:
      'Creation of content for client websites, as well as creation of visual elements that are aligned with client’s branding and defined site objectives using HTML, CSS, Javascript, and Jquery.',
    date: '2019 - 2022',
    stacks: ['HTML', 'CSS', 'Javascript', 'JQuery'],
    siteUrl: 'https://www.dpc.ph/',
  },
];
