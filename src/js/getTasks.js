import axios from "axios";

async function getTasks(offset, tasksPerPage) {
  const response = await axios.get(
    `http://localhost:2222/api/tasks?offset=${offset}&limit=${tasksPerPage}`
  );
  console.log(response);
  const tasks = response.data.data;
  if (tasks.length === 0) {
    throw new Error();
  }
  return response.data;
}

export default getTasks;
