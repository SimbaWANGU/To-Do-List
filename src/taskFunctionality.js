import { taskArray, arr } from './declarations.js';
import Task from './tasks.js';

const addTask = (addToList) => {
  if (addToList.value !== '') {
    const task = new Task(addToList.value);
    taskArray.push(task);
    localStorage.setItem('task', JSON.stringify(taskArray));
    addToList.value = '';
    window.location.reload(true);
  }
};

const deleteTasks = (j) => {
  document.querySelectorAll('.checkbox').forEach((check) => {
    if (check.checked === false) {
      arr.push(check.nextElementSibling.innerText);
    }
  });
  const newtaskArray = taskArray.filter((item) => arr.includes(item.description));
  newtaskArray.forEach((task) => {
  // eslint-disable-next-line no-plusplus
    task.index = j++;
  });
  localStorage.setItem('task', JSON.stringify(newtaskArray));
  window.location.reload(true);
};

const editTask = (editText, task) => {
  const updateStorage = JSON.parse(localStorage.getItem('task'));
  updateStorage[task.index - 1].description = editText.value;
  localStorage.setItem('task', JSON.stringify(updateStorage));
  window.location.reload(true);
};

const deleteEditTask = (myImage4, j) => {
  const newtaskArray = taskArray.filter(({ description }) => !description
    .includes(myImage4.previousElementSibling.previousElementSibling.value));
  newtaskArray.forEach((task) => {
    // eslint-disable-next-line no-plusplus
    task.index = j++;
  });
  localStorage.setItem('task', JSON.stringify(newtaskArray));
  window.location.reload(true);
};

export {
  addTask, deleteTasks, editTask, deleteEditTask,
};