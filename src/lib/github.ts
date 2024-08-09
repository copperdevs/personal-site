export async function getMostRecentCommit(repo: string) {
  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
  const data = await response.json();
  return data[0];
}

export async function getMostRecentCommitName(repo: string) {
  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
  const data = await response.json();
  return data[0].commit.message;
}

export async function getMostRecentCommitUrl(repo: string) {
    const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
    const data = await response.json();
    return data[0].html_url;
}