import { About } from '@/components/About';
import { Video } from '@/components/Video';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ViewMoreLink } from '@/components/ViewMoreLink';
import { experienceData, projectsData } from '@/constant/card';
import DownloadPDFButton from '@/components/DownloadPDFButton';

export default function Home() {
  return (
    <main>
      <div className="lg:hidden">
        <Header />
      </div>

      <div className="pb-[70px]">
        <div className="lg:py-24 mb-[60px] lg:mb-[0px]">
          <About />
          <Video />
        </div>

        <Divider label="Experience" />

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

        <DownloadPDFButton />

        <Divider label="Projects" />

        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.image}
            stacks={project.stacks}
            siteUrl={project.siteUrl}
            githubUrl={project.githubUrl}
            video={project.video}
          />
        ))}

        <ViewMoreLink
          label="View More Projects"
          link="https://github.com/jhonpabz?tab=repositories"
        />
      </div>
    </main>
  );
}
