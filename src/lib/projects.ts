import { getCollection } from "astro:content";

export async function getAllProjects() {
  const projects = await getCollection("projects");
  const visibleProjects = projects.filter((project) => !project.data.hidden);

  return visibleProjects;
}

export async function getRandomProjects(amount: number) {
  const projects = await getCollection("projects");
  const visibleProjects = projects.filter((project) => !project.data.hidden);

  function randomizeProjects(arr, n: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  return randomizeProjects(visibleProjects, amount);
}