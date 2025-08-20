class Project {

    static Id = 1;
    constructor(name) {
        this.projectId = Project.Id++;
        this.name = name;
    }
}

export function createProject(name) {
    const project = new Project(name);

    return project;
}