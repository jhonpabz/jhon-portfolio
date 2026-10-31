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
    images: [{ src: FilbetNextJs, alt: "FilbetNextJs project interface" }],
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
    images: [{ src: FilbetNextJs, alt: "FilbetNextJs project interface" }],

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
    images: [{ src: ChangeGPS, alt: "ChangeGPS project interface" }],

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
    id: 7.2,
    title: "HYPERSPACE Storage",
    description:
      "This app is like AirBNB for storages. I created the web admin part of the application",
    images: [{ src: Hyperspace, alt: "Hyperspace project interface" }],

    stacks: ["React", "Redux", "Material UI", "NodeJs", "ExpressJs", "MongoDB"],
  },
  {
    id: 1,
    title: "JHONSHOPPE",
    description: "E-commerce web app using Nuxt JS + Supabase Authentication.",
    images: [{ src: Jhonshoppe, alt: "Jhonshoppe project interface" }],
    stacks: ["Vue", "Nuxt Js", "Typescript", "Tailwind", "Supabase "],
    siteUrl: "https://jhonshoppe.netlify.app/",
    githubUrl: "https://github.com/jhonpabz/jhonshoppe",
  },
  {
    id: 2,
    title: "AI Associate",
    description:
      "AI Associate with Next 13, React, Prisma, Tailwind, shad/cn UI. Authentication using Clerk and Open AI for API",
    images: [{ src: AIAssociate, alt: "AIAssociate project interface" }],
    stacks: ["Next 13", "React", "Prisma", "Tailwind", "Clerk"],
    githubUrl: "https://github.com/jhonpabz/ai-associate",
  },
    {
    id: 2.1,
    title: "Net Worth Tracker App",
    description:
      "Net Worth Tracker is a sleek PWA that lets you track your savings across multiple accounts with customizable cards. Use it offline on your mobile like a real app—simple, modern, and built for clarity.",
    images: [{ src: NetWorthTracker, alt: "NetWorthTracker project interface" }],
    stacks: ["React", "Typescript", "Tailwind"],
    siteUrl: "https://networth-tracker-app.vercel.app/",
    githubUrl: "https://github.com/jhonpabz/networth-tracker-app",
  },
  {
    id: 3,
    title: "My Second Portfolio",
    description:
      "Clean and minimalist portfolio website design. I used (AOS) Animate on Scroll, Portfolio filtering, Bootstrap, CSS, and Javascript/jQuery.",
    images: [{ src: SecondPortfolio, alt: "SecondPortfolio project interface" }],
    stacks: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
    siteUrl: "https://jhon.netlify.app/",
    githubUrl: "https://github.com/jhonpabz/MyPortfolio2020",
  },
  {
    id: 4,
    title: "My First Portfolio",
    description:
      "I created this website to showcase my skill as a fresh graduate of BSIT. I use the Bootstrap framework, CCS3 Keyframes animation, parallax effect, and Javascript.",
    images: [{ src: FirstPortfolio, alt: "FirstPortfolio project interface" }],
    stacks: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
    siteUrl: "https://jhoncesarpablo.netlify.app/",
  },
];

export const experienceData: Experience[] = [
  {
    "workPeriod": "JAN 2025 — PRESENT",
    "title": "Full Stack Developer • Everlounge Inc.",
    "description": "Design, develop, and deliver full-stack web applications using Node.js, Express, React, TypeScript, PostgreSQL, and Docker. Independently own projects from requirements and architecture through implementation, database integration, testing, and deployment, including e-commerce platforms and real-time chat applications. Lead frontend engineering, maintain PHP and Laravel applications, mentor developers, and conduct code reviews. Introduce AI-assisted development workflows and collaborate with backend, Ops/DevOps, UI/UX, and translation teams to ship production-ready applications in Linux-based environments.",
    "date": "2025 - Present",
    "stacks": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "Linux",
      "JumpServer"
    ]
  },
  {
    "workPeriod": "APRIL 2024 — JAN 2025",
    "title": "Front-End Developer • Fun J. Software Development Corp.",
    "description": "Develop and maintain React admin panels, Vue web applications, H5 apps, and landing pages. Migrate legacy platforms, implement features, and resolve issues across local, staging, and production environments. Create technical documentation, prepare production builds for different platforms, and collaborate with backend engineers, project managers, and UI/UX designers.",
    "date": "2024 - 2025",
    "stacks": [
      "React",
      "Vue",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
      "SASS",
      "Ant Design",
      "REST APIs",
      "WebSocket",
      "Jenkins"
    ],
    "siteUrl": "https://www.linkedin.com/in/fun-j-software-development-4604782a8/"
  },
  {
    "workPeriod": "JUNE 2023 — APRIL 2024",
    "title": "Front-End Developer • Philtech Info Services Inc.",
    "description": "Develop, maintain, and test applications using Next.js, Nuxt.js, React, Vue, and TypeScript. Establish project structure, build reusable components and hooks, integrate REST APIs, and configure Redux/Thunk, Next.js, and middleware. Document application architecture and data flow from APIs through global state to components. Implement core features, review code, and help developers resolve blockers while promoting readable, maintainable, and optimized code.",
    "date": "2023 - 2024",
    "stacks": [
      "Next.js",
      "Nuxt.js",
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML",
      "CSS"
    ],
    "siteUrl": "https://www.linkedin.com/company/philtech-info-service-inc/mycompany/"
  },
  {
    "workPeriod": "MARCH 2022 — JUNE 2023",
    "title": "Associate Software Engineer • Fligno Software Philippines Inc.",
    "description": "Design, develop, and test frontend applications using React and modern web technologies. Collaborate with backend engineers, project managers, and UI/UX designers to turn concepts into production-ready applications. Estimate requirements, create technical documentation and mockups, review frontend code, and approve pull requests. Present sprint progress to clients, primarily in Australia, and teach fellow developers through the company upskilling program.",
    "date": "2022 - 2023",
    "stacks": [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Zustand",
      "React Hook Form",
      "Tailwind CSS",
      "Material UI",
      "CSS",
      "SASS",
      "HTML",
      "Jest"
    ],
    "siteUrl": "https://fligno.com/"
  },
  {
    "workPeriod": "AUGUST 2019 — FEBRUARY 2022",
    "title": "Web Designer & Developer • Directories Philippines Corporation (DPC) & One Hundred Services Inc.",
    "description": "Design and build Wix websites aligned with client branding and site objectives. Customize existing websites using Powersite CMS, HTML, CSS, SASS, JavaScript, and jQuery, and enhance visual assets in Photoshop. Collaborate with the TechOps team supervisor to develop the Bel-Air Vehicle Registration System, implementing CRUD functionality and data filtering in JavaScript.",
    "date": "2019 - 2022",
    "stacks": [
      "Wix",
      "Powersite CMS",
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "jQuery",
      "Photoshop"
    ],
    "siteUrl": "https://www.dpc.ph/"
  }
];
