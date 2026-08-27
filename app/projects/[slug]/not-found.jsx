import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="not-found-page container">
      <p className="section-label">404 / PROJECT NOT FOUND</p>
      <h1>This project is no longer here.</h1>
      <p>It may have been renamed or unpublished in the CMS.</p>
      <Link className="primary-button" href="/#projects">Return to projects</Link>
    </main>
  );
}
