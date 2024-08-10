import { isLocalHost } from "./utils";

export async function getMostRecentCommit(repo: string) {
  if (isLocalHost()) return "development";
  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);

  if (!response.ok) {
    console.log("Github Recent Commit | Network response not okay");
    return null;
  }

  const data = await response.json();
  return data[0];
}

export async function getMostRecentCommitName(repo: string) {
  if (isLocalHost()) return "development";

  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);

  if (!response.ok) {
    console.log("Github Recent Commit Name | Network response not okay");
    return "couldn't get recent commit name";
  }

  const data = await response.json();
  return data[0].commit.message;
}

export async function getMostRecentCommitUrl(repo: string) {
  if (isLocalHost()) return "#development";

  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);

  if (!response.ok) {
    console.log("Github Recent Commit Url | Network response not okay");
    return "#null";
  }

  const data = await response.json();
  return data[0].html_url;
}
