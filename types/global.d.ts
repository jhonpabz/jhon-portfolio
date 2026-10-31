declare type Projects = {
  id: number;
  title: string;
  description: string;
  image?: string | import('next/image').StaticImageData;
  images?: { src: string | import('next/image').StaticImageData; alt: string }[];
  video?: string;
  stacks: string[];
  siteUrl?: string;
  githubUrl?: string;
};

declare type Experience = {
  workPeriod: string;
  title: string;
  description: string;
  date: string;
  stacks: string[];
  siteUrl?: string;
};

declare module '*.mov' {
  const src: string;
  export default src;
}
