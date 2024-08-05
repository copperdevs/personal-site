import { getAllProjects } from "../../lib/projects.js";

export async function GET({}) {
  const projects = await getAllProjects();
  return new Response(JSON.stringify(projects));
}
