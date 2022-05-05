/**
 * @jest-environment jsdom
 */

import { taskArray } from './declarations.js';
import { addTask, deleteEditTask, deleteTasks } from './taskFunctionality.js';

describe('Adding and Removing one task and multiple tasks', () => {
  test('add task to array and checking array length', () => {
    const taskTest = {
      value: 'Cook Food',
    };
    expect(addTask(taskTest).length).toBe(taskArray.length = 1);
  });

  test('add task to array and checking array length', () => {
    const taskTest = {
      value: 'Clean House',
    };
    expect(addTask(taskTest).length).toBe(taskArray.length = 2);
  });

  test('add task to array and checking array length', () => {
    const taskTest = {
      value: 'Do Dishes',
    };
    expect(addTask(taskTest).length).toBe(taskArray.length = 3);
  });

  test('attempt to delete random task not in the array and checking array length', () => {
    const div = document.createElement('div');
    div.classList.add('list-content-2');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    const editText = document.createElement('input');
    editText.setAttribute('value', 'Random Words');

    const myImage4 = new Image();
    myImage4.src = './delete.png';
    myImage4.classList.add('delete');

    div.appendChild(editText);
    div.appendChild(checkBox);
    div.appendChild(myImage4);

    expect(deleteEditTask(myImage4, 1).length).toBe(taskArray.length = 3);
  });

  
});