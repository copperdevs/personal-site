import { useState, useEffect } from "preact/hooks";
import DisplayProjects from "./DisplayProjects.jsx";
import { getRandomProjects as utilGetRandomProjects} from "../../lib/projects.js";

const RandomProjects = ({ amount, showCategoryIcon, onError }) => {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = await getRandomProjects(amount, true);

        setRandomProjects(projects);
        onError(false); // notify parent of successful fetch
      } catch (error) {
        onError(true); // notify parent of fetch error
        console.error("Fetch error:", error);
      }
    }

    fetchProjects();
  }, [amount]);

  return (
    <DisplayProjects
      projects={randomProjects}
      showCategoryIcon={showCategoryIcon}
    />
  );
};

async function getRandomProjects(amount: number, useApiCall: boolean) {
  if (useApiCall) {
    const response = await fetch(`/api/projects/random/${amount}.json`);

    if (!response.ok) {
      throw new Error(
        "Network response while getting random projects was not ok"
      );
    }
    const projects = await response.json();

    return projects;
  } else {
    await utilGetRandomProjects(amount);
  }
}

export default RandomProjects;
