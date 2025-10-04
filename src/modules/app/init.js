// Imports necessary functions to run the app

import { showProjectModal, closeDialogAction, addProject, showTodoModal, addTodo, projectClick } from "../dom/eventListeners"

import { renderSidebarProjects, renderProjectSelect } from "../dom/projectRender";

export function initializeApp() {
    showProjectModal();

    showTodoModal();

    closeDialogAction();

    addProject();

    addTodo();

    renderSidebarProjects();

    renderProjectSelect();

    projectClick();
}