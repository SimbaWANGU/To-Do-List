import { taskArray } from './declarations.js';

export default class Task {
  constructor(inputFieldValue) {
    this.description = inputFieldValue;
    this.completed = false;
    this.index = taskArray.length + 1;
  }
}