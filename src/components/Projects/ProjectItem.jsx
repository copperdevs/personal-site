import ProjectCategoryIcon from "../Icons/ProjectCategoryIcon";

const ProjectItem = ({
  title,
  description,
  url,
  source,
  category,
  showCategoryIcon,
}) => (
  <div>
    <h3 class="project-item-header">
      <a href={url}>
        <span class="text-gradient">{title}</span>
      </a>

      <div aria-disabled="true">
        {url !== source && (
          <a
            href={source}
            aria-label="Github navigation icon that links to the projects page"
          >
            <i class="fa-brands fa-github" />
          </a>
        )}

        {showCategoryIcon && category !== "" && (
          <ProjectCategoryIcon category={category} />
        )}
      </div>
    </h3>

    <h5 class="project-item-paragraph">
      <span>{description}</span>
    </h5>
  </div>
);

export default ProjectItem;
