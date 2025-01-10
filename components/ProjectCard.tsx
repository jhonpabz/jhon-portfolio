"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { BaseNewTabLink } from "./base/BaseNewTabLink";
import ReactPlayer from "react-player";

export const ProjectCard = (
  props: ComponentsPropsNamespace.ProjectCardProps
) => {
  const { imgSrc, title, description, stacks, siteUrl, githubUrl, video } =
    props;
  const { theme } = useTheme();

  return (
    <div id="projects" className="group py-2">
      <Card className="flex flex-col lg:flex-row md:flex-row group-hover:bg-primary/10 transition-colors duration-200">
        <div className="md:basis-1/4">
          <div className="p-6 lg:mr-[-15px] md:mr-[-15px] mb-[-15px] max-w-sm">
            {video ? (
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                muted={true}
              />
            ) : (
              <Image
                src={imgSrc}
                alt="Project | Experience"
                width={700}
                height={400}
                className={cn(
                  "rounded-lg border-2 transition-colors duration-300 min-w-[150px]",
                  theme === "dark"
                    ? "group-hover:border-lightGreen"
                    : "group-hover:border-darkGreen"
                )}
              />
            )}
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
          <CardContent>
            <div className="flex">
              {githubUrl && (
                <BaseNewTabLink siteUrl={githubUrl} style="mr-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Github className="w-4 h-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">View code on Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BaseNewTabLink>
              )}
              {siteUrl && (
                <BaseNewTabLink siteUrl={siteUrl}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ExternalLink className="w-4 h-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Visit live site</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BaseNewTabLink>
              )}
            </div>
          </CardContent>
          {!!stacks && (
            <CardFooter className="flex flex-wrap mt-[-15px]">
              {stacks.map((stack) => (
                <Badge
                  variant="secondary"
                  className={cn(
                    "mr-4 transition-colors duration-300  mt-2",
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
    </div>
  );
};
