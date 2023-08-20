import { Calendar, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { IProjectCardProps } from "@/types/props";

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
      <Card className="flex flex-row  group-hover:bg-primary/10 transition-colors duration-200">
        <div className="basis-1/4">
          <div className="pl-8 pt-8 ">
            <Image
              src={image}
              alt="Project"
              width={700}
              height={400}
              className="rounded-lg border-2 group-hover:border-primary/70 transition-colors duration-200"
            />
          </div>
        </div>
        <div className="basis-3/4">
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
                  <a target="_blank" rel="noopener noreferrer" className="mr-3">
                    <Github className="w-4 h-4" />
                  </a>
                </Link>
              )}
              {siteUrl && (
                <Link href={siteUrl} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
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
    </div>
  );
};
