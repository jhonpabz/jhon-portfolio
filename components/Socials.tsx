import { Facebook, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { BaseNewTabLink } from "./base/BaseNewTabLink";

export const Socials = () => {
  const { theme } = useTheme();
  return (
    <div className="flex gap-4 text-primary/60 mt-6 cursor-pointer">
      <BaseNewTabLink
        siteUrl="https://www.linkedin.com/in/jhoncesarpablo/"
        style="mr-3"
      >
        <Linkedin
          className={cn(
            "transition-colors duration-200",
            theme === "dark" ? "hover:text-lightGreen" : "hover:text-darkGreen"
          )}
        />
      </BaseNewTabLink>

      <BaseNewTabLink siteUrl="https://github.com/jhonpabz" style="mr-3">
        <Github
          className={cn(
            "transition-colors duration-200",
            theme === "dark" ? "hover:text-lightGreen" : "hover:text-darkGreen"
          )}
        />
      </BaseNewTabLink>

      <BaseNewTabLink
        siteUrl="https://www.facebook.com/jhoncesarpablo/"
        style="mr-3"
      >
        <Facebook
          className={cn(
            "transition-colors duration-200",
            theme === "dark" ? "hover:text-lightGreen" : "hover:text-darkGreen"
          )}
        />
      </BaseNewTabLink>
    </div>
  );
};
