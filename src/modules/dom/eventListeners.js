// Event Listeners Module

import { createProject } from "../app/projects";

const newProjectButton = document.getElementById("new-project-button");
const projectModal = document.getElementById("new-project-modal");
const projectInput = document.getElementById("new-project-name");
const createProjBtn = document.getElementById("create-project-button");

// Modals //

export function showDialog(type) {
    if (type === "project") {
        projectModal.showModal();
    }
}

export function showProjectModal() {
    newProjectButton.addEventListener("click", () => {
        showDialog("project");
    })
}

export function addProject() {
    createProjBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const projectName = projectInput.value;

        const newProject = createProject(projectName);

        createProject(newProject);
    })
}

export function closeDialog(element) {
    element.close();
}

export function closeDialogAction() {
    const cancelBtn = document.querySelectorAll("button.cancel-button");

    cancelBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            closeDialog(projectModal);
        })
    })
}