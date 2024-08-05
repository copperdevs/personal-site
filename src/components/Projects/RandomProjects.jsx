import { useState, useEffect } from "preact/hooks";
import DisplayProjects from "./DisplayProjects.jsx";

const RandomProjects = ({ amount, showCategoryIcon, onError }) => {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`/api/projects/random/${amount}.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const projects = await response.json();
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

export default RandomProjects;
