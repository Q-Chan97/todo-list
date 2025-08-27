const taskArray = [];

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

    taskArray.push(task);

    localStorage.setItem("tasks", JSON.stringify(taskArray))
    return task;
}

createTasks("test", "testDesc", "Now", "High", "None");