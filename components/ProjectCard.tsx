import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface IProjectCardProps {
  image: string;
  title: string;
  description: string;
  date?: string;
  stacks?: string[];
}

export const ProjectCard = ({
  image,
  title,
  description,
  date,
  stacks = ["Test", "Test1", "Test2"],
}: IProjectCardProps) => {
  return (
    <div>
      <Card className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-3/4">
          <CardHeader>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>
              <div className="mt-1">{description}</div>
              <div className="mt-2">{date}</div>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            {stacks.map((stack) => (
              <Badge className="mr-4" key={stack}>
                {stack}
              </Badge>
            ))}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};
