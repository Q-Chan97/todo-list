// Event Listeners Module

import { createProject, deleteProject, setActiveProject, getActiveProject, removeActiveProject } from "../app/projects";
import { createTasks } from "../app/tasks";
import { renderSidebarProjects, renderProjectSelect, renderProjectOnScreen } from "./projectRender";

// Project Interactive Elements //

const newProjectButton = document.getElementById("new-project-button");
const projectModal = document.getElementById("new-project-modal");
const projectInput = document.getElementById("new-project-name");
const createProjBtn = document.getElementById("create-project-button");
const projectListSection = document.getElementById("project-list-section");


// Todo Interactive Elements //

const newTodoButton = document.getElementById("todo-button");
const todoModal = document.getElementById("new-todo-modal");
const todoName = document.getElementById("todo-name");
const todoDesc = document.getElementById("todo-desc");
const todoDate = document.getElementById("todo-date");
const todoPriority = document.getElementById("todo-priority");
const todoProject = document.getElementById("choose-project-list");


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
        renderProjectSelect(); // Refresh select dropdown on modal open
    })
}

export function addProject() {
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
    todoName.value = "";
    todoDesc.value = "";
    todoDate.value = "";
    todoPriority.value = "";
    todoProject.value = "";
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

export function addTodo() {
    const createTodoBtn = document.getElementById("create-todo-button");

    createTodoBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const todoNameValue = todoName.value.trim();
        const todoDescValue = todoDesc.value.trim();
        const todoDateValue = todoDate.value;
        const todoPriorityValue = todoPriority.value;
        const todoProjectValue = todoProject.value;

        createTasks(todoNameValue, todoDescValue, todoDateValue, todoPriorityValue, todoProjectValue);

        closeDialog(todoModal);
        resetForm();

        let activeProject = getActiveProject();
        if (activeProject === todoProjectValue) { // If selected project = targeted project, render on screen
            renderProjectOnScreen(activeProject);
        }

    })
}

// Buttons

export function projectClick() {
    projectListSection.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-project-id]");
        if (!btn) return;
        const projectId = btn.dataset.projectId;

        const selectedProject = document.querySelectorAll(".selected-project-button"); // Removes class from all buttons in div
        selectedProject.forEach((button) => {
            button.classList.remove("selected-project-button");
        })

        btn.classList.add("selected-project-button"); // Adds class to most recently selected project button

        renderProjectOnScreen(projectId);
        setActiveProject(projectId); // Sets active project in local storage
    })
}

export function deleteProjectEvent() {
    projectListSection.addEventListener("click", (e) => {
       const deleteButton = e.target.closest(".proj-delete-button");
       if (!deleteButton) return;
       
       deleteProject(deleteButton);

       projectListSection.innerHTML = "";

       renderSidebarProjects();

       const activeProject = getActiveProject();
       const deletedId = deleteButton.dataset.projectId;

       if (activeProject && activeProject === deletedId) {
        removeActiveProject();
       }
    })
}