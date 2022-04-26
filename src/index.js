import './style.css';
import Icon from './menu.png';
import Reload from './reload.png';
import Enter from './to-left.png';

function component() {
  const tasks = [
    {
      description: 'Clean room',
      completed: false,
      index: 1,
    },
    {
      description: 'Cook lunch',
      completed: false,
      index: 2,
    },
  ];
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

  const addToList = document.createElement('p');
  addToList.classList.add('addToList');
  addToList.innerText = 'Add to your List...';
  addtoList.appendChild(addToList);

  const myImage3 = new Image();
  myImage3.src = Enter;
  myImage3.classList.add('enter');
  addtoList.appendChild(myImage3);

  toDo.appendChild(addtoList);

  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('list');
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list_item');

    const div = document.createElement('div');
    div.classList.add('list-content');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkbox');

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