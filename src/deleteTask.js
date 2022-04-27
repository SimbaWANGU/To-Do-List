import taskArray from './declarations.js';

const deleteTask = (checkBox) => {
  const newtaskArray = taskArray.filter(({ description }) => !description
    .includes(checkBox.nextElementSibling.innerHTML));
  return newtaskArray;
};

export default deleteTask;