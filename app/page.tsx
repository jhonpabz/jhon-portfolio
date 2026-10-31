import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import Image from 'next/image';
import { ProjectCard } from '@/components/ProjectCard';
import { experienceData, projectsData } from '@/constant/card';
export default function Home() {
 return <main className="mobile-nav-content">
  <section id="about" className="hero section-shell">
   <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> FULL STACK DEVELOPER</p><h1>Ideas into<br/>interfaces.<br/><span>Beyond ordinary.</span></h1><p className="hero-intro">I’m Jhon Cesar Pablo. I build thoughtful digital experiences with clean code, purposeful design, and a focus on the people using them.</p><div className="hero-actions"><a className="primary-link" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="text-link" href="/Jhon_Cesar_Pablo_CV.pdf" download>Download CV <Download size={16}/></a></div></div>
   <div className="hero-art" aria-hidden="true"><div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/><div className="core"><span>&lt;/&gt;</span></div><span className="art-label art-label-top">DESIGN × DEVELOPMENT</span><span className="art-label art-label-bottom">CRAFTED WITH PRECISION</span><span className="orbit-point"/></div>
   <div className="hero-bottom"><span>7+ YEARS OF BUILDING FOR THE WEB</span><a href="#experience">Scroll to explore <ArrowDown size={14}/></a><span>REACT / NEXT.JS / TYPESCRIPT / NODE.JS / EXPRESS / POSTGRESQL</span></div>
  </section>
  <div className="technology-strip" aria-label="Core technologies">{['React','Next.js','Typescript','Node.js','Express','PostgreSQL'].map(t=><span key={t}>{t}<i>✳</i></span>)}</div>
  <section className="about-section section-shell"><p className="eyebrow">01 / THE DEVELOPER</p><div className="about-grid"><h2>Built with intent.<br/><span className="muted">Made for people.</span></h2><div><p>Full Stack Developer with 7+ years of experience and strong expertise in frontend engineering, specializing in React, TypeScript, and modern web technologies. Experienced in structured development environments with dedicated frontend and backend teams, following scalable architecture and coding best practices, as well as independently owning projects end-to-end in lean teams. Skilled in building maintainable applications, mentoring developers, conducting code reviews, and delivering production-ready solutions using modern full-stack technologies.</p><div className="profile-signature"><Image src="/jhon-profile.jpg" width={48} height={48} alt="Jhon Cesar Pablo"/><div><strong>Jhon Cesar Pablo</strong><span>Full Stack Developer</span></div></div></div></div></section>
  <section id="experience" className="experience-section section-shell"><div className="section-heading"><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Experience that<br/><span className="muted">moves things forward.</span></h2></div><a className="text-link" href="/Jhon_Cesar_Pablo_CV.pdf" download>Full CV <ArrowUpRight size={18}/></a></div><div className="experience-list">{experienceData.map((exp,i)=><article className="experience-row" key={exp.workPeriod}><div className="experience-date"><span className="row-number">0{i+1}</span>{exp.workPeriod}</div><div><h3>{exp.siteUrl?<a href={exp.siteUrl} target="_blank" rel="noreferrer">{exp.title} <ArrowUpRight size={18}/></a>:exp.title}</h3><p>{exp.description}</p><div className="tags">{exp.stacks.map(s=><span key={s}>{s}</span>)}</div></div></article>)}</div></section>
  <section id="projects" className="projects-section section-shell"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Real challenges.<br/><span className="muted">Thoughtful solutions.</span></h2></div><p>A selection of platforms, products,<br/>and experiments I’ve helped bring to life.</p></div>
    {[
      { id: 'work-projects', label: 'WORK PROJECT HIGHLIGHTS', projects: projectsData.slice(0, 4), compact: false },
      { id: 'personal-projects', label: 'PERSONAL/SIDE PROJECT', projects: projectsData.slice(4), compact: true },
    ].map(category => (
      <section key={category.id} className="project-category" aria-labelledby={category.id}>
        <h3 id={category.id} className="project-category-heading">{category.label}</h3>
        <div className={category.compact ? 'project-grid project-grid-personal' : 'project-grid'}>
          {category.projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgSrc={project.image}
              images={project.images}
              stacks={project.stacks}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
              video={project.video}
            />
          ))}
        </div>
      </section>
    ))}
    <a className="more-projects text-link" href="https://github.com/jhonpabz?tab=repositories" target="_blank" rel="noreferrer">View More Projects <ArrowUpRight size={18}/></a></section>
  <footer className="section-shell"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><a className="footer-title" href="https://www.linkedin.com/in/jhoncesarpablo/" target="_blank" rel="noreferrer">Let’s build what’s next.<ArrowUpRight/></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Jhon Cesar Pablo</span><div><a href="https://github.com/jhonpabz" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jhoncesarpablo/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><span>Designed with purpose. Built with care.</span></div></footer>
 </main>;
}
