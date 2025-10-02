// Imports necessary functions to run the app

import { showProjectModal, closeDialogAction, addProject, showTodoModal } from "../dom/eventListeners"

import { renderSidebarProjects, renderProjectSelect } from "../dom/projectRender";

export function initializeApp() {
    showProjectModal();

    showTodoModal();

    closeDialogAction();

    addProject();

    renderSidebarProjects();

    renderProjectSelect();
}