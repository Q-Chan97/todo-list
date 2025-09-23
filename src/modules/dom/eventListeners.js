// Event Listeners

const newProjectButton = document.getElementById("new-project-button");
const projectModal = document.getElementById("new-project-modal");

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