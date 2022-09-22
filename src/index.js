import "./index.html";
import "./scss/main.scss";
import tasks from "./js/tasks-list";
import taskMarkup from "./js/tasks-markup";
import addNewTask from "./js/add-new-task";
import removeTask from "./js/remove-task";

tasks.forEach((task) => taskMarkup(task));
addNewTask(tasks, taskMarkup);
removeTask();

// const todoList = document.querySelector(".todo-list");
// todoList.addEventListener("click", onRemoveClick);
// function onRemoveClick(event) {
//   console.log(event.target.classList.value);
//   console.log(event.target.dataset.taskId);
//   if (event.target.classList.value === "btn btn-danger") {
//     const todoItem = document.querySelector(`#${event.target.dataset.taskId}`);
//     console.log(todoItem);
//     todoItem.remove();
//   }
// }
