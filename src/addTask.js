import taskArray from './declarations.js';
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

export default addTask;
