export const projectArray = [];

class Project {

    static Id = 1;
    constructor(name) {
        this.items = [] // Array to store tasks
        this.id = Project.Id++; // Every project gets an ID
        this.name = name;
    }

    addTasks(task) {
        this.items.push(task);
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
        project.addTasks(task);
    }

    localStorage.setItem("projects", JSON.stringify(projectArray)); // Update local storage
}