import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import { getProjectBySlug, getProjects } from "@/sanity/lib/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Jegede Adeola James`, description: project.description };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <main className="case-study">
        <div className="container">
          <nav className="case-nav" aria-label="Project navigation">
            <Link href="/#projects" className="case-back"><ArrowLeft size={17} /> Back to projects</Link>
            <Link href="/" className="brand case-brand">JA</Link>
          </nav>

          <header className="case-hero">
            <p className="section-label">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-intro">{project.description}</p>
            <div className="case-meta">
              <div><span>Year</span><strong>{project.year || "—"}</strong></div>
              <div><span>Role</span><strong>{project.role || "—"}</strong></div>
              <div><span>Stack</span><strong>{(project.tech || []).join(", ")}</strong></div>
            </div>
          </header>

          <div className="case-cover">
            {project.image ? <img src={project.image} alt={`${project.title} interface`} /> : <div className="case-placeholder"><span>{project.title}</span></div>}
          </div>

          <div className="case-content">
            <section className="case-overview">
              <p className="section-label">PROJECT OVERVIEW</p>
              <div className="case-prose"><ProjectOverview value={project.overview} /></div>
            </section>
            <div className="case-details">
              {[["01 / CHALLENGE", project.challenge], ["02 / SOLUTION", project.solution], ["03 / OUTCOME", project.outcome]].map(([label, copy]) => copy && (
                <section key={label}><p className="section-label">{label}</p><p>{copy}</p></section>
              ))}
            </div>
            {(project.liveUrl || project.repositoryUrl) && (
              <div className="case-actions">
                {project.liveUrl && <a className="primary-button" href={project.liveUrl} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={17} /></a>}
                {project.repositoryUrl && <a className="outline-button" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github size={17} /> View repository</a>}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
