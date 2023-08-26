import Link from "next/link";

export const BaseNewTabLink = (
  props: ComponentsPropsNamespace.BaseNewTabLink
) => {
  const { siteUrl, children, style } = props;
  return (
    <Link href={siteUrl} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className={style}>
        {children}
      </a>
    </Link>
  );
};
