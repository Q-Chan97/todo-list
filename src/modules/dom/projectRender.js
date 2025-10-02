import { projectArray } from "../app/projects";

// Sidebar project list render

export function renderSidebarProjects() {
    const projectListSection = document.getElementById("project-list-section");

    projectArray.forEach((project) => {
      const btn = document.createElement("button");
      btn.textContent = project.name;
      btn.classList.add("sidebar-project-btn");

      btn.dataset.projectId = project.id; // Sets HTML dataset id to equal project Id

      projectListSection.appendChild(btn);
    })
}

// Todo modal project select render

export function renderProjectSelect() {
    const projectList = document.getElementById("choose-project-list");

    projectList.innerHTML = ""; // Clears select field, eliminates repeats on modal open

    const defaultSelect = document.createElement("option"); // Default option, tells user what to do
    defaultSelect.value = "";
    defaultSelect.setAttribute("selected", "")
    defaultSelect.setAttribute("disabled", "");
    defaultSelect.textContent = "Choose Project";
    projectList.appendChild(defaultSelect);

    projectArray.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.id;
        option.textContent = project.name;

        projectList.appendChild(option);
    })
}