import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ViewMoreLink } from "@/components/ViewMoreLink";

export default function Home() {
  return (
    <main>
      <div className="lg:hidden ">
        <Header />
      </div>

      <div className="lg:pt-24">
        <About />
        <ProjectCard
          image="/sample.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          date="2019 - 2022"
          title="JhonPabz"
          siteUrl="https://www.google.com/"
          githubUrl="https://www.google.com/"
        />
        <Divider />
      </div>

      <ViewMoreLink label="Google" link="https://www.google.com/" />
    </main>
  );
}
