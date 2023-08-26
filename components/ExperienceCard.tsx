"use client";

import { useTheme } from "next-themes";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { BaseNewTabLink } from "./base/BaseNewTabLink";

export const ExperienceCard = (
  props: ComponentsPropsNamespace.ExperienceCardProps
) => {
  const { workPeriod, title, description, stacks, siteUrl } = props;
  const { theme } = useTheme();

  return (
    <div className="group cursor-pointer py-2">
      <BaseNewTabLink siteUrl={`${siteUrl}`}>
        <Card className="flex flex-col lg:flex-row md:flex-row  group-hover:bg-primary/10 transition-colors duration-200">
          <div className="md:basis-1/4">
            <div className="pl-6 pt-8 w-[150px] text-primary/60 text-sm">
              <p>{workPeriod}</p>
            </div>
          </div>
          <div className="md:basis-3/4">
            <CardHeader>
              <CardTitle
                className={cn(
                  "text-xl transition-colors duration-300",
                  theme === "dark"
                    ? "group-hover:text-lightGreen"
                    : "group-hover:text-darkGreen"
                )}
              >
                {title}
              </CardTitle>
              <CardDescription>
                <div className="mt-1">{description}</div>
              </CardDescription>
            </CardHeader>

            {!!stacks && (
              <CardFooter>
                {stacks.map((stack) => (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "mr-4 transition-colors duration-300",
                      theme === "dark" ? "text-lightGreen" : "text-darkGreen"
                    )}
                    key={stack}
                  >
                    {stack}
                  </Badge>
                ))}
              </CardFooter>
            )}
          </div>
        </Card>
      </BaseNewTabLink>
    </div>
  );
};
