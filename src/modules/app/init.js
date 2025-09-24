// Imports necessary functions to run the app

import { showProjectModal, closeDialogAction, addProject } from "../dom/eventListeners"

export function initializeApp() {
    showProjectModal();

    closeDialogAction();

    addProject();
}