import { getCollection } from "astro:content";

export async function GET({}) {
  const projects = await getCollection("projects");
  const visibleProjects = projects.filter((project) => !project.data.hidden);
  return new Response(JSON.stringify(visibleProjects));
}
