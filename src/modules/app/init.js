// Imports necessary functions to run the app

import { showProjectModal, closeDialogAction, addProject, showTodoModal } from "../dom/eventListeners"

export function initializeApp() {
    showProjectModal();

    showTodoModal();

    closeDialogAction();

    addProject();
}