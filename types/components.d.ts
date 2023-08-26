declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;

  type BaseNewTabLink = React.HTMLAttributes<HTMLLinkElement> & {
    siteUrl: string;
    style?: string;
  };
}
