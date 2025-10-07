export const projectArray = JSON.parse(localStorage.getItem("projects")) || []; // If projects don't exist, then it's an empty array

class Project {

    static Id = 1;
    constructor(name) {
        this.items = [] // Array to store tasks
        this.id = Project.Id++; // Every project gets an ID
        this.name = name;
    }
}

export function createProject(name) {
    const project = new Project(name);

    projectArray.push(project);

    localStorage.setItem("projects", JSON.stringify(projectArray))

    return project;
}

export function findProject(projectId, task) {
    const project = projectArray.find(project => project.id === Number(projectId)); // Finds a matching id in project array, changes from a string to a number

    if (project) { // If project exists, add it to project items
        project.items.push(task);
    }

    localStorage.setItem("projects", JSON.stringify(projectArray)); // Update local storage
}

export function setActiveProject(projectId) { // Functions to get and set the currently selected project in local storage
    localStorage.setItem("activeProject", JSON.stringify(projectId));
}

export function getActiveProject() {
    return JSON.parse(localStorage.getItem("activeProject"));
}