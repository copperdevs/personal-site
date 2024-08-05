import { useState, useEffect } from "preact/hooks";
import DisplayProjects from "../Projects/DisplayProjects.jsx";

const RandomProjects = ({ amount, showCategoryIcon }) => {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/api/projects.json");
      const projects = await response.json();

      function getRandomProjects(arr, n) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
      }

      const selectedProjects = getRandomProjects(projects, amount);
      setRandomProjects(selectedProjects);
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
