import ChangeGPS from "@/assets/project-change-gps.png";
import Hyperspace from "@/assets/project-hyperspace-storage.png";
import FilbetNextJs from "@/assets/project-filbet-nextjs.png";
import Jhonshoppe from "@/assets/project-jhonshoppe-nuxt.jpg";
import AIAssociate from "@/assets/project-ai-associate.jpg";
import NetWorthTracker from "@/assets/project-networth.jpg";
import SecondPortfolio from "@/assets/project-second-portfolio.jpg";
import FirstPortfolio from "@/assets/project-first-portfolio.jpg";

export const projectsData: Projects[] = [
  {
    id: 6,
    title: "Web Admin",
    description:
      "A React Web Admin Panel for online casinos enables seamless management of players, games, payments, and promotions with a secure, responsive interface. Built with React.js and Ant Design, it ensures efficient, real-time operations.",
    image: FilbetNextJs,
    video: "/videos/web-admin.mov",
    stacks: [
      "React",
      "Typescript",
      "UMI",
      "useContext",
      "Ant Design",
      "Java",
      "Jenkins",
    ],
  },
  {
    id: 5,
    title: "Filbet Next JS",
    description:
      "Online Casino/Betting site using React, Next JS, Typescript, Redux Toolkit, Tailwind, and React Hook Form.",
    image: FilbetNextJs,

    stacks: [
      "React",
      "Next JS",
      "Typescript",
      "Redux",
      "Tailwind",
      "React Hook Form ",
    ],
    // siteUrl: "https://nextjs.filbet.dev/",
    siteUrl: "https://filbet.com/",
  },
  {
    id: 7,
    title: "Estate Planning (changegps.com.au)",
    description: "A new feature of a big accounting software in Australia.",
    image: ChangeGPS,

    stacks: [
      "React Vite",
      "React Query",
      "Zustand",
      "Material UI",
      "React Hook Form",
      "Laravel",
    ],
    siteUrl: "https://changegps.com.au/",
  },
  {
    id: 7,
    title: "HYPERSPACE Storage",
    description:
      "This app is like AirBNB for storages. I created the web admin part of the application",
    image: Hyperspace,

    stacks: ["React", "Redux", "Material UI", "NodeJs", "ExpressJs", "MongoDB"],
  },
  {
    id: 1,
    title: "JHONSHOPPE",
    description: "E-commerce web app using Nuxt JS + Supabase Authentication.",
    image: Jhonshoppe,
    stacks: ["Vue", "Nuxt Js", "Typescript", "Tailwind", "Supabase "],
    siteUrl: "https://jhonshoppe.netlify.app/",
    githubUrl: "https://github.com/jhonpabz/jhonshoppe",
  },
  {
    id: 2,
    title: "AI Associate",
    description:
      "AI Associate with Next 13, React, Prisma, Tailwind, shad/cn UI. Authentication using Clerk and Open AI for API",
    image: AIAssociate,
    stacks: ["Next 13", "React", "Prisma", "Tailwind", "Clerk"],
    githubUrl: "https://github.com/jhonpabz/ai-associate",
  },
    {
    id: 2.1,
    title: "Net Worth Tracker App",
    description:
      "Net Worth Tracker is a sleek PWA that lets you track your savings across multiple accounts with customizable cards. Use it offline on your mobile like a real app—simple, modern, and built for clarity.",
    image: NetWorthTracker,
    stacks: ["React", "Typescript", "Tailwind"],
    siteUrl: "https://networth-tracker-app.vercel.app/",
    githubUrl: "https://github.com/jhonpabz/networth-tracker-app",
  },
  {
    id: 3,
    title: "My Second Portfolio",
    description:
      "Clean and minimalist portfolio website design. I used (AOS) Animate on Scroll, Portfolio filtering, Bootstrap, CSS, and Javascript/jQuery.",
    image: SecondPortfolio,
    stacks: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
    siteUrl: "https://jhon.netlify.app/",
    githubUrl: "https://github.com/jhonpabz/MyPortfolio2020",
  },
  {
    id: 4,
    title: "My First Portfolio",
    description:
      "I created this website to showcase my skill as a fresh graduate of BSIT. I use the Bootstrap framework, CCS3 Keyframes animation, parallax effect, and Javascript.",
    image: FirstPortfolio,
    stacks: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
    siteUrl: "https://jhoncesarpablo.netlify.app/",
  },
];

export const experienceData: Experience[] = [
  {
    workPeriod: "APRIL 2024 — PRESENT",
    title: "Front End Developer • Fun J. Software Development Corp.",
    description:
      "Develop and maintain existing/new projects (React Web Admins, Vue Web app, H5 app, and Landing page) using React JS, Vue JS, Javascript, Typescript, Redux, HTML, CSS, SASS, Ant Design, Rest API’s, WebSocket, Jenkins, etc.",
    date: "2019 - 2022",
    stacks: [
      "Javascript",
      "Typescript",
      "Nextjs",
      "React",
      "Vue",
      "WebSocket",
      "Ant Design",
      "Tailwind",
      "CSS",
      "Sass",
    ],
    siteUrl:
      "https://www.linkedin.com/in/fun-j-software-development-4604782a8/",
  },
  {
    workPeriod: "JUNE 2023 — APRIL 2024",
    title: "Front End Developer • PHILTECH Info Services Inc.",
    description:
      "Develop, maintain, and test new and existing projects using React, Nextjs, Nuxtjs, Vue, Es6 Javascript, Tailwind, CSS, Sass.",
    date: "2019 - 2022",
    stacks: [
      "Nextjs",
      "React",
      "Nuxtjs",
      "Vue",
      "Typescript",
      "Pinia",
      "Tailwind",
      "CSS",
      "Sass",
    ],
    siteUrl:
      "https://www.linkedin.com/company/philtech-info-service-inc/mycompany/",
  },
  {
    workPeriod: "MARCH 2022 — JUNE 2023",
    title: "Associate Software Engineer • Fligno Software Philippines Inc",
    description:
      "Design, develop, and test new and existing projects using the latest technologies(React). Apply best practice development patterns and follow design briefs, Continuous Integration/Development, and maintenance of code.",
    date: "2019 — 2022",
    stacks: [
      "React",
      "Typescript",
      "Next JS",
      "Node",
      "Express",
      "MongoDB",
      "Redux",
      "Zustand",
      "Material UI",
      "Tailwind",
    ],
    siteUrl: "https://fligno.com/",
  },
  {
    workPeriod: "AUGUST 2019 — FEB 2022",
    title: "Web Designer/Developer • Directories Philippines Corporation",
    description:
      "Creation of content for client websites, as well as creation of visual elements that are aligned with client’s branding and defined site objectives using HTML, CSS, Javascript, and Jquery.",
    date: "2019 - 2022",
    stacks: ["HTML", "CSS", "Javascript", "JQuery"],
    siteUrl: "https://www.dpc.ph/",
  },
];
