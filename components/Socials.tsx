import { Linkedin } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export const Socials = () => {
  const { theme } = useTheme();
  return (
    <div className="text-primary/60 mt-6 cursor-pointer">
      <Linkedin
        className={cn(
          "transition-colors duration-200",
          theme === "dark" ? "hover:text-lightGreen" : "hover:text-darkGreen"
        )}
      />
    </div>
  );
};
