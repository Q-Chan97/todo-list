import { projectArray } from "../app/projects";
import { showProject } from "../dom/dom";

// Sidebar project list render

export function renderSidebarProjects() {
    const projectListSection = document.getElementById("project-list-section");

    projectArray.forEach((project) => {
      const projWrapper = document.createElement("div");
      projWrapper.classList.add("project-wrapper");

      const btn = document.createElement("button");
      btn.textContent = project.name;
      btn.classList.add("sidebar-project-btn");
      btn.dataset.projectId = project.id; // Sets HTML dataset id to equal project Id

      projectListSection.appendChild(projWrapper);
      projWrapper.appendChild(btn);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("proj-delete-button");
      deleteButton.dataset.projectId = project.id;
      projWrapper.appendChild(deleteButton);
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

// Render project on screen

export function renderProjectOnScreen(projectId) {
    // Find matching project id, makes project id (a number) a string so it can be matched to dataset Id (a string)
    const projectToRender = projectArray.find(proj => proj.id.toString() === projectId);

    if (!projectToRender) return;

    showProject(projectToRender);
}