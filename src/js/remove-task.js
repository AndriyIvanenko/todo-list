export default function () {
  const todoList = document.querySelector(".todo-list");
  todoList.addEventListener("click", onRemoveClick);
  function onRemoveClick(event) {
    // console.log(event.target.classList.value);
    // console.log(event.target.dataset.taskId);
    if (event.target.classList.value === "btn btn-danger") {
      const todoItem = document.querySelector(
        `#${event.target.dataset.taskId}`
      );
      console.log(todoItem);
      todoItem.remove();
    }
  }
}
