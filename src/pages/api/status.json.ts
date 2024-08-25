import { Status, DiscordStatus } from "../../lib/types";

export async function GET({}) {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/781660039537623080`
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ activityStatus: Status.Offline }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const lanyardData = await response.json();

  return new Response(JSON.stringify({ activityStatus: Status.DoNotDisturb }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
