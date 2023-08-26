import { Facebook, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Socials = () => {
  const { theme } = useTheme();
  return (
    <div className="flex gap-4 text-primary/60 mt-6 cursor-pointer">
      <Link href="https://www.linkedin.com/in/jhoncesarpablo/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="mr-3">
          <Linkedin
            className={cn(
              "transition-colors duration-200",
              theme === "dark"
                ? "hover:text-lightGreen"
                : "hover:text-darkGreen"
            )}
          />
        </a>
      </Link>
      <Link href="https://github.com/jhonpabz" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="mr-3">
          <Github
            className={cn(
              "transition-colors duration-200",
              theme === "dark"
                ? "hover:text-lightGreen"
                : "hover:text-darkGreen"
            )}
          />
        </a>
      </Link>
      <Link href="https://www.facebook.com/jhoncesarpablo/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="mr-3">
          <Facebook
            className={cn(
              "transition-colors duration-200",
              theme === "dark"
                ? "hover:text-lightGreen"
                : "hover:text-darkGreen"
            )}
          />
        </a>
      </Link>
    </div>
  );
};
