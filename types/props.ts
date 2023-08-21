export interface IProjectCardProps {
  image: string;
  title: string;
  description: string;
  date?: string;
  stacks?: string[];
  siteUrl?: string;
  githubUrl?: string;
}

export interface IViewMoreLinkProps {
  label: string;
  link: string;
}
