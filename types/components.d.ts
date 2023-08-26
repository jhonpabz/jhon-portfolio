declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;

  type BaseNewTabLink = React.HTMLAttributes<HTMLLinkElement> & {
    siteUrl: string;
    style?: string;
  };

  type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
    imgSrc: string;
    title: string;
    description: string;
    date: string;
    stacks?: string[];
    siteUrl?: string;
    githubUrl?: string;
  };
}
