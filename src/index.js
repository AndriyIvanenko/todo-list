import "./index.html";
import "./scss/main.scss";
import getTasks from "./js/getTasks";
import taskMarkup from "./js/tasks-markup";
import addNewTask from "./js/add-new-task";
import removeTask from "./js/remove-task";
import Notiflix from "notiflix";

let tasks;
let totalTasks;
let pageNumber = 1;
let tasksPerPage = 1;
let offset = 0;

const getTasksForm = document.querySelector(".get-tasks");
getTasksForm.addEventListener("click", onGetTasksClick);
function onGetTasksClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("btn-get-tasks")) {
    const tasksPerPageInput = document.querySelector("#tasks-per-page");
    tasksPerPage = tasksPerPageInput.value;

    getTasks(offset, tasksPerPage)
      .then((response) => {
        tasks = response.data;
        totalTasks = response.total;
        tasks.forEach((task) => taskMarkup(task));
        Notiflix.Notify.success(`Getting ${tasks.length} tasks successful!`);
      })
      .catch(() => {
        Notiflix.Notify.failure("Ups! Something went wrong");
      });
  }
}

const createNewTaskForm = document.querySelector("form");
createNewTaskForm.addEventListener("submit", newTaskSubmit);
function newTaskSubmit(event) {
  event.preventDefault();
  addNewTask(tasks, taskMarkup);
  createNewTaskForm.reset();
}

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", onRemoveClick);
function onRemoveClick(event) {
  removeTask(event, tasks);
}
