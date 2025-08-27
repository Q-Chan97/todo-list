class Project {

    static Id = 1;
    constructor(name) {
        this.items = [] // Array to store tasks
        this.projectId = Project.Id++; // Every project gets an ID
        this.name = name;
    }

    addTasks(task) {
        this.items.push(task);
    }
}

export function createProject(name) {
    const project = new Project(name);

    return project;
}

let test = createProject("Test");
console.log(test);
test.addTasks("testTask")
console.log(test.items);
console.log(test);