import type { APIRoute } from "astro";
import { getRandomProjects } from "../../../../lib/projects";

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
