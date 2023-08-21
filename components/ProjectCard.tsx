import { Calendar, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export const ProjectCard = ({
  image,
  title,
  description,
  date,
  stacks = ["Test", "Test1", "Test2"],
  siteUrl,
  githubUrl,
}: IProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
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
                <CardTitle className="text-xl group-hover:">{title}</CardTitle>
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
              <CardFooter>
                {stacks.map((stack) => (
                  <Badge variant="secondary" className="mr-4" key={stack}>
                    {stack}
                  </Badge>
                ))}
              </CardFooter>
            </div>
          </Card>
        </a>
      </Link>
    </div>
  );
};
