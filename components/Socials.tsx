import { Facebook, Github, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { BaseNewTabLink } from "./base/BaseNewTabLink";

export const Socials = () => {
  return (
    <div className="flex gap-4 text-primary/60 mt-6 cursor-pointer">
      <BaseNewTabLink
        siteUrl="https://www.linkedin.com/in/jhoncesarpablo/"
        style="mr-3"
      >
        <Linkedin
          className={cn(
            "transition-colors duration-200",
            "hover:text-darkGreen dark:hover:text-lightGreen"
          )}
        />
      </BaseNewTabLink>

      <BaseNewTabLink siteUrl="https://github.com/jhonpabz" style="mr-3">
        <Github
          className={cn(
            "transition-colors duration-200",
            "hover:text-darkGreen dark:hover:text-lightGreen"
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
            "hover:text-darkGreen dark:hover:text-lightGreen"
          )}
        />
      </BaseNewTabLink>
    </div>
  );
};
