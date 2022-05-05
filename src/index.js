import './style.css';
import Icon from './menu.png';
import Reload from './reload.png';
import Enter from './to-left.png';
import Delete from './delete.png';
import { taskArray } from './declarations.js';
import {
  addTask,
  deleteTasks,
  editTask,
  deleteEditTask,
} from './taskFunctionality.js';
import statusUpdate from './statusUpdates.js';

function component() {
  const toDo = document.getElementById('toDo');
  toDo.classList.add('container');

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');

  const todaysToDo = document.createElement('p');
  todaysToDo.classList.add('todays');
  todaysToDo.innerText = "Today's To Do";

  const myImage2 = new Image();
  myImage2.src = Reload;
  myImage2.classList.add('reload');

  todoDiv.appendChild(todaysToDo);
  todoDiv.appendChild(myImage2);
  toDo.appendChild(todoDiv);

  const addtoList = document.createElement('div');
  addtoList.classList.add('addtoList');

  const addToList = document.createElement('input');
  addToList.classList.add('addToList');
  addToList.setAttribute('placeholder', 'Add to your List...');
  addtoList.appendChild(addToList);

  const myImage3 = new Image();
  myImage3.src = Enter;
  myImage3.classList.add('enter');
  addtoList.appendChild(myImage3);

  toDo.appendChild(addtoList);

  addToList.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(addToList);
      window.location.reload(true);
    }
  });

  myImage3.addEventListener('click', () => {
    if (addToList.value !== '') {
      addTask(addToList);
      window.location.reload(true);
    }
  });

  taskArray.sort((a, b) => a.index - b.index);

  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('list');

  let i = 1;
  const j = 1;
  taskArray.forEach((task) => {
    // eslint-disable-next-line no-plusplus
    task.index = i++;
    const listItem = document.createElement('li');
    listItem.classList.add('list_item');

    const div = document.createElement('div');
    div.classList.add('list-content');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkbox');

    checkBox.addEventListener('change', () => {
      statusUpdate(checkBox, task);
    });

    const taskText = document.createElement('p');
    taskText.classList.add('task');
    taskText.innerText = task.description;

    const myImage = new Image();
    myImage.src = Icon;
    myImage.classList.add('icon');

    myImage.addEventListener('click', () => {
      myImage.parentElement.classList.toggle('hide');
      const div = document.createElement('div');
      div.classList.add('list-content-2');

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('checkbox');

      const editText = document.createElement('input');
      editText.classList.add('editText');
      editText.setAttribute('value', taskText.innerText);

      editText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          editTask(editText, task);
        }
      });

      const myImage4 = new Image();
      myImage4.src = Delete;
      myImage4.classList.add('delete');

      myImage4.addEventListener('click', () => {
        deleteEditTask(myImage4, j);
        window.location.reload(true);
      });

      div.appendChild(editText);
      div.appendChild(checkBox);
      div.appendChild(myImage4);

      listItem.appendChild(div);
    });

    div.appendChild(checkBox);
    div.appendChild(taskText);
    div.appendChild(myImage);

    listItem.appendChild(div);

    unorderedList.appendChild(listItem);
  });
  toDo.appendChild(unorderedList);

  const completed = document.createElement('div');
  completed.classList.add('completed');

  const completedButton = document.createElement('button');
  completedButton.classList.add('completedButton');
  completedButton.innerText = 'Clear all Completed';
  completed.appendChild(completedButton);

  completedButton.addEventListener('click', () => {
    deleteTasks(j);
    window.location.reload(true);
  });

  toDo.appendChild(completed);
}
document.body.appendChild(component());