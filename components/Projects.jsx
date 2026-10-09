import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import { getProjects } from "@/sanity/lib/projects";
import { profile } from "@/content/profile";

function ProjectVisual({ project, number }) {
  return (
    <div className={`project-visual ${project.slug === "voltpay" ? "project-visual--contain" : ""}`}>
      {project.image ? (
        <img src={project.image} alt={`${project.title} project preview`} className="project-image" loading="lazy" decoding="async" />
      ) : (
        <><div className="visual-grid" /><div className="visual-window"><span /><span /><span /><div className="visual-line large" /><div className="visual-line" /><div className="visual-line short" /></div></>
      )}
      <div className="project-number">{String(number).padStart(2, "0")}</div>
    </div>
  );
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-heading-row">
          <div><p className="section-label">03 / SELECTED WORK</p><h2>Things I've Built.</h2></div>
          <p>A collection of products and systems engineered from concept to deployment. Select a project to read the full case study.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={`project-card ${project.featured ? "project-featured" : ""}`}>
              <Link href={`/projects/${project.slug}`} className="project-card-link" aria-label={`View ${project.title} case study`}>
                <ProjectVisual project={project} number={index + 1} />
                <div className="project-body">
                  <div className="project-top">
                    <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
                    <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
                  </div>
                  <p>{project.description}</p>
                  <div className="chips">{(project.tech || []).map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more">
          <p>This is a selection of my work. I've also worked on other projects beyond those featured here.</p>
          <a href={profile.github} className="outline-button" target="_blank" rel="noreferrer">
            Explore my GitHub <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
