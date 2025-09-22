import { projectArray } from "../app/projects";
import { taskArray, test2 } from "../app/tasks";
import { test1 } from "../app/tasks";
import { testProject } from "../app/projects";

const projectDiv = document.querySelector("#project-div");
const wrapper = document.createElement("div");
wrapper.classList.add("task-wrapper");
projectDiv.appendChild(wrapper);

export function showTask(task) {
    const taskContainer = document.createElement("div");
    const taskInfo = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDueDate = document.createElement("div");
    const taskPriority = document.createElement("div");
    const taskDescription = document.createElement("div");
    const taskNotes = document.createElement("div");

    taskContainer.classList.add("task-container");
    taskInfo.classList.add("task-info");
    taskTitle.classList.add("task-name");
    taskDueDate.classList.add("task-date");
    taskPriority.classList.add("task-priority");
    taskDescription.classList.add("task-description");
    taskNotes.classList.add("task-notes");

    taskContainer.setAttribute("data-id", task.id); // Sets data id in HTML to be task's id

    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;
    taskDescription.textContent = task.description;
    taskNotes.textContent = task.notes;

    wrapper.appendChild(taskContainer);
    taskContainer.appendChild(taskInfo);
    taskInfo.append(taskTitle, taskDueDate, taskPriority, taskDescription, taskNotes);
}

export function showProject(project) {
    const projectName = document.createElement("div");
    
    projectName.classList.add("project-name");

    projectName.textContent = project.name;

    wrapper.appendChild(projectName);
}

showProject(testProject); // Testing purposes
showTask(test1);
showTask(test2);