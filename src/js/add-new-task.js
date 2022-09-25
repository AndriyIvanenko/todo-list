export default function (tasks, taskMarkup) {
  const taskDeadline = document.querySelector("#deadline");
  const taskTitle = document.querySelector("#title");
  const taskDescription = document.querySelector("#description");
  const taskPriority = document.querySelector("#priority");

  const newTask = {};

  newTask.id = tasks[tasks.length - 1].id + 1;
  newTask.deadline = new Date(taskDeadline.value).toLocaleDateString();
  newTask.title = taskTitle.value;
  newTask.description = taskDescription.value;
  newTask.priority = taskPriority.value;
  newTask.isDone = false;

  tasks.push(newTask);
  taskMarkup(newTask);
}
