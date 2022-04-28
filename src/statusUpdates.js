const statusUpdate = (checkBox, task) => {
  checkBox.nextElementSibling.classList.toggle('checkedTask');
  const updateStorage = JSON.parse(localStorage.getItem('task'));
  updateStorage[task.index - 1].completed = checkBox.checked;
  localStorage.setItem('task', JSON.stringify(updateStorage));
};

export default statusUpdate;