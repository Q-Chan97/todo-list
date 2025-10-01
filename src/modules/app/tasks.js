import { findProject } from "./projects";

export const taskArray = JSON.parse(localStorage.getItem("tasks")) || []; // If tasks don't exist, it's an empty array

class Tasks {

    static Id = 1;

    constructor(title, description, dueDate, priority, projectId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Tasks.Id++;
        this.projectId = projectId;
    }
}

export function createTasks(title, description, dueDate, priority, projectId) {
    let task = new Tasks(title, description, dueDate, priority, projectId);

    findProject(projectId, task);

    taskArray.push(task);

    localStorage.setItem("tasks", JSON.stringify(taskArray))
    return task;
}