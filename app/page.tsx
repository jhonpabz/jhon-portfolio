import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="max-w-2xl p-5">
        <ProjectCard
          image="/tobi1.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          date="2019 - 2022"
          title="JhonPabz"
          siteUrl="https://shared229.wixsite.com/philtech"
          githubUrl="https://shared229.wixsite.com/philtech"
        />
      </div>
    </main>
  );
}
