import { getCollection } from "astro:content";

export async function getAllProjects() {
  const projects = await getCollection("projects");
  const visibleProjects = projects.filter((project) => !project.data.hidden);

  return visibleProjects;
}
