class Tasks {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

export function createTasks(title, description, dueDate, priority, notes) {
    let task = new Tasks(title, description, dueDate, priority, notes);

    return task;
}

console.log(createTasks("New Task", "Description Here", "Now", "High", "No notes Here"));