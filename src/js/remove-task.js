import axios from "axios";
import Notiflix from "notiflix";

export default function (event, tasks) {
  if (event.target.classList.contains("btn-danger")) {
    const taskItem = document.querySelector(`#${event.target.dataset.taskId}`);
    const removeIndex = tasks.findIndex(
      (task) => task.id === Number(taskItem.id.slice(5))
    );
    tasks.splice(removeIndex, 1);
    taskItem.remove();
    axios
      .delete(`http://localhost:2222/api/tasks/${taskItem.id.slice(5)}`)
      .then(
        Notiflix.Notify.success(
          `Task #${taskItem.id.slice(5)} deleted successfully`
        )
      );
  }
}
