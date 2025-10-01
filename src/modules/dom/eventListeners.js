// Event Listeners Module

import { createProject } from "../app/projects";
import { renderSidebarProjects } from "./projectRender";

// Project Interactive Elements //

const newProjectButton = document.getElementById("new-project-button");
const projectModal = document.getElementById("new-project-modal");
const projectInput = document.getElementById("new-project-name");
const createProjBtn = document.getElementById("create-project-button");

// Todo Interactive Elements //

const newTodoButton = document.getElementById("todo-button");
const todoModal = document.getElementById("new-todo-modal");
const todoName = document.getElementById("todo-name");
const todoDesc = document.getElementById("todo-desc");
const todoDate = document.getElementById("todo-date");
const todoPriority = document.getElementById("todo-priority");
const chooseProjectList = document.getElementById("chooseProjectList");


// Modals //

export function showDialog(type) {
    if (type === "project") {
        projectModal.showModal();
    }
    else if (type === "todo") {
        todoModal.showModal();
    }
}

export function showProjectModal() {
    newProjectButton.addEventListener("click", () => {
        showDialog("project");
    })
}

export function showTodoModal() {
    newTodoButton.addEventListener("click", () => {
        showDialog("todo");
    })
}

export function addProject() {
    const projectListSection = document.getElementById("project-list-section");

    createProjBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const projectName = projectInput.value.trim();

        if (!projectName) return; // Cancels if no value is present for project

        createProject(projectName);
        closeDialog(projectModal);
        resetForm();
        projectListSection.innerHTML = ""; // Clears sidebar, stops repeat project buttons
        renderSidebarProjects(); // Shows project button after creation
    })
}

export function resetForm() {
    projectInput.value = "";
}

export function closeDialog(element) {
    element.close();
}

export function closeDialogAction() {
    const cancelBtn = document.querySelectorAll("button.cancel-button");

    cancelBtn.forEach((btn) => { // Works for both project and todo modals
        btn.addEventListener("click", () => {
            closeDialog(projectModal);
            closeDialog(todoModal);
        })
    })
}