"use client";

import { Calendar, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { IProjectCardProps } from "@/types/props";
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

export const ProjectCard = ({
  image,
  title,
  description,
  date,
  stacks,
  siteUrl,
  githubUrl,
}: IProjectCardProps) => {
  const { theme } = useTheme();

  return (
    <div className="group cursor-pointer py-1 ">
      <Link href={`${siteUrl}`} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="mr-3">
          <Card className="flex flex-row group-hover:bg-primary/10 transition-colors duration-200">
            <div className="md:basis-1/4">
              <div className="pl-8 pt-8 ">
                <Image
                  src={image}
                  alt="Project | Experience"
                  width={700}
                  height={400}
                  className="rounded-lg border-2 group-hover:border-primary/70 transition-colors duration-200"
                />
              </div>
            </div>
            <div className="md:basis-3/4">
              <CardHeader>
                <CardTitle
                  className={cn(
                    "text-xl transition-colors duration-300",
                    theme === "dark"
                      ? "group-hover:text-[#5EEAD4]"
                      : "group-hover:text-[#207d6f]"
                  )}
                >
                  {title}
                </CardTitle>
                <CardDescription>
                  <div className="mt-1">{description}</div>
                  <div className="flex mt-4">
                    <Calendar className="rounded-md mr-2 w-4 h-4 mt-px" />
                    {date}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex">
                  {githubUrl && (
                    <Link href={githubUrl} legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                      >
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
                      </a>
                    </Link>
                  )}
                  {siteUrl && (
                    <Link href={siteUrl} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
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
                      </a>
                    </Link>
                  )}
                </div>
              </CardContent>
              {!!stacks && (
                <CardFooter>
                  {stacks.map((stack) => (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "mr-4 transition-colors duration-300",
                        theme === "dark" ? "text-[#5EEAD4]" : "text-[#207d6f]"
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
        </a>
      </Link>
    </div>
  );
};
