import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ViewMoreLink } from "@/components/ViewMoreLink";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className=" p-5">
        <ProjectCard
          image="/sample.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          date="2019 - 2022"
          title="JhonPabz"
          siteUrl="https://www.google.com/"
          githubUrl="https://www.google.com/"
        />
      </div>
      <ViewMoreLink label="Google" link="https://www.google.com/" />
    </main>
  );
}
