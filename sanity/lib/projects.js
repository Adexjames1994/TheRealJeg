import { createClient } from "next-sanity";
import { localProjects } from "@/content/projects";
import { apiVersion, dataset, hasSanityConfig, projectId } from "../env";

const client = hasSanityConfig
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const projectFields = `
  "slug": slug.current,
  title,
  category,
  description,
  tech,
  "image": mainImage.asset->url,
  featured,
  year,
  role,
  overview,
  challenge,
  solution,
  outcome,
  liveUrl,
  repositoryUrl
`;

export async function getProjects() {
  if (!client) return localProjects;

  try {
    const projects = await client.fetch(
      `*[_type == "project"] | order(order asc, _createdAt desc) {${projectFields}}`,
      {},
      { next: { revalidate: 60 } },
    );
    if (!projects.length) return localProjects;

    const managedSlugs = new Set(projects.map((project) => project.slug));
    return [
      ...projects,
      ...localProjects.filter((project) => !managedSlugs.has(project.slug)),
    ];
  } catch {
    return localProjects;
  }
}

export async function getProjectBySlug(slug) {
  if (client) {
    try {
      const project = await client.fetch(
        `*[_type == "project" && slug.current == $slug][0] {${projectFields}}`,
        { slug },
        { next: { revalidate: 60 } },
      );
      if (project) return project;
    } catch {
      // Keep the portfolio available if the CMS is temporarily unreachable.
    }
  }

  return localProjects.find((project) => project.slug === slug) || null;
}
