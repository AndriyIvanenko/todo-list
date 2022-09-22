import taskMarkup from "../templ/task.hbs";

const todoList = document.querySelector(".todo-list");

export default function (task) {
  todoList.insertAdjacentHTML("beforeend", taskMarkup(task));
}
