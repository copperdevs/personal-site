const ProjectCategoryIcon = ({ category }) => {
  const icons = {
    "Unity Packages": "fa-brands fa-unity",
    Libraries: "fa-regular fa-file-code",
    Websites: "fa-solid fa-globe",
    Minecraft: "fa-solid fa-cubes",
    "Desktop Apps": "fa-regular fa-window-maximize",
    Subset: "fa-solid fa-diagram-project"
  };

  return icons[category] ? <i class={icons[category]} /> : null;
};

export default ProjectCategoryIcon;
