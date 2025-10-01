import { projectArray } from "../app/projects";

export function renderSidebarProjects() {
    const projectListSection = document.getElementById("project-list-section");

    projectArray.forEach((project) => {
      const btn = document.createElement("button");
      btn.textContent = project.name;

      btn.dataset.projectId = project.id; // Sets HTML dataset id to equal project Id

      projectListSection.appendChild(btn);
    })
}