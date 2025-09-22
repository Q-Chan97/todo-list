// Event Listeners

const newProjectButton = document.getElementById("new-project-button");
const projectModal = document.getElementById("new-project-modal");

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