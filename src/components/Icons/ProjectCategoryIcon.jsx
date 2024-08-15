const ProjectCategoryIcon = ({ category }) => {
  const icons = {
    "Unity Packages": "fa-brands fa-unity",
    Libraries: "fa-regular fa-file-code",
    Websites: "fa-solid fa-globe",
    Minecraft: "fa-solid fa-cubes",
    "Desktop Apps": "fa-regular fa-window-maximize",
    Subsets: "fa-solid fa-diagram-project",
    Games: "fa-solid fa-gamepad",
    Apps: "fa-solid fa-mobile-screen-button",
  };

  return icons[category] ? <i class={icons[category]} /> : null;
};

export default ProjectCategoryIcon;
