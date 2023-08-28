declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;

  type BaseNewTabLink = React.HTMLAttributes<HTMLLinkElement> & {
    siteUrl: string;
    style?: string;
  };

  type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
    imgSrc: string | StaticImageData;
    title: string;
    description: string;
    stacks?: string[];
    siteUrl?: string;
    githubUrl?: string;
  };

  type ExperienceCardProps = React.HTMLAttributes<HTMLDivElement> & {
    workPeriod: string;
    title: string;
    description: string;
    stacks?: string[];
    siteUrl?: string;
    githubUrl?: string;
  };

  type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
    label: string;
  };
}
