import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, showCategoryIcon }) => (
  <section>
    {projects.map((project, index) => (
      <>
        <section data-aos="zoom-in">
          <ProjectItem
            title={project.data.title}
            description={project.data.description}
            url={project.data.link}
            source={project.data.source}
            category={project.data.category}
            showCategoryIcon={showCategoryIcon}
          />
          {index < projects.length - 1 && <hr />}
          {!(index < projects.length - 1) && (
            <>
              <br />
              <br />
            </>
          )}
        </section>
      </>
    ))}
  </section>
);

export default ProjectList;
