import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {
  const count = params.count;

  if (count === undefined)
    return new Response(
      JSON.stringify({
        count: count,
      })
    );

  const randomProjects = await getRandomProjects(Number.parseInt(count));

  return new Response(JSON.stringify(randomProjects));
};

export function getStaticPaths() {
  return [
    { params: { count: "0" } },
    { params: { count: "1" } },
    { params: { count: "2" } },
    { params: { count: "3" } },
    { params: { count: "4" } },
    { params: { count: "5" } },
  ];
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
