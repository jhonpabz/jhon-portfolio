import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ViewMoreLink } from "@/components/ViewMoreLink";
import { experienceData, projectsData } from "@/constant/card";

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

        <Divider label="Test" />

        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.workPeriod}
            title={exp.title}
            workPeriod={exp.workPeriod}
            description={exp.description}
            stacks={exp.stacks}
            siteUrl={exp.siteUrl}
          />
        ))}
        <Divider label="Test" />

        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.date}
            imgSrc={project.image}
            stacks={project.stacks}
            siteUrl={project.siteUrl}
            githubUrl={project.githubUrl}
          />
        ))}
        <Divider label="Test" />
      </div>

      <ViewMoreLink label="Google" link="https://www.google.com/" />
    </main>
  );
}
