import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ViewMoreLink } from "@/components/ViewMoreLink";
import { projectsData } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <div className="lg:hidden ">
        <Header />
      </div>

      <div>
        <div className="lg:py-24">
          <About />
        </div>

        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.date}
            image={project.image}
            stacks={project.stacks}
            siteUrl={project.siteUrl}
            githubUrl={project.githubUrl}
          />
        ))}
        <Divider />
      </div>

      <ViewMoreLink label="Google" link="https://www.google.com/" />
    </main>
  );
}
