import { useState, useEffect } from "preact/hooks";
import DisplayProjects from "./DisplayProjects.jsx";

const RandomProjects = ({ amount, showCategoryIcon, onError }) => {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = await getRandomProjects(amount);

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

async function getRandomProjects(amount) {
  const response = await fetch(`/api/projects.json`);

  if (!response.ok) {
    throw new Error(
      "Network response while getting random projects was not ok"
    );
  }

  const projects = await response.json();

  const visibleProjects = projects.filter((project) => !project.data.hidden);

  function randomizeProjects(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  return randomizeProjects(visibleProjects, amount);
}

export default RandomProjects;
