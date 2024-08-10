import { useState } from "preact/hooks";
import RandomProjects from "../Projects/RandomProjects.jsx";

const IndexRandomProjects = () => {
  const [fetchError, setFetchError] = useState(false);

  return (
    <div>
      {!fetchError && (
        <>
          <h3 class="index-projects-header index-projects-spacing">
            Projects - <a href="/projects">View All</a>
          </h3>
          <hr />
          <RandomProjects
            amount={3}
            showCategoryIcon={false}
            onError={setFetchError}
          />
        </>
      )}
    </div>
  );
};

export default IndexRandomProjects;
