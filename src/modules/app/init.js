// Imports necessary functions to run the app

import { showProjectModal, closeDialogAction } from "../dom/eventListeners"

export function initializeApp() {
    showProjectModal();

    closeDialogAction();
}