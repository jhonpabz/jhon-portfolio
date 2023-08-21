import { IViewMoreLinkProps } from "@/types/props";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ViewMoreLink = ({ label, link }: IViewMoreLinkProps) => {
  return (
    <Link href={link} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Button variant="ghost">
          {label} <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </a>
    </Link>
  );
};
