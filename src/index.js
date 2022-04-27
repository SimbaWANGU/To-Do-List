import './style.css';
import Icon from './menu.png';
import Reload from './reload.png';
import Enter from './to-left.png';
import taskArray from './declarations.js';
import addTask from './addTask.js';
import deleteTask from './deleteTask.js';

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
    }
  });

  myImage3.addEventListener('click', () => {
    if (addToList.value !== '') {
      addTask(addToList);
    }
  });

  taskArray.sort((a, b) => a.index - b.index);

  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('list');

  let i = 1;
  let j = 1;
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

    checkBox.addEventListener('click', () => {
      const newtaskArray = deleteTask(checkBox);
      newtaskArray.forEach((task) => {
        // eslint-disable-next-line no-plusplus
        task.index = j++;
      });
      localStorage.setItem('task', JSON.stringify(newtaskArray));
      window.location.reload(true);
    });

    const taskText = document.createElement('p');
    taskText.classList.add('task');
    taskText.innerText = task.description;

    const myImage = new Image();
    myImage.src = Icon;
    myImage.classList.add('icon');

    div.appendChild(checkBox);
    div.appendChild(taskText);
    div.appendChild(myImage);

    listItem.appendChild(div);

    unorderedList.appendChild(listItem);
  });
  toDo.appendChild(unorderedList);

  const completed = document.createElement('div');
  completed.classList.add('completed');

  const completedText = document.createElement('p');
  completedText.classList.add('completedText');
  completedText.innerText = 'Completed';
  completed.appendChild(completedText);

  toDo.appendChild(completed);
}
document.body.appendChild(component());