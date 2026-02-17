document.addEventListener('DOMContentLoaded', () => {
  const increaseBtn = document.getElementById('btnPlus');
  const decreaseBtn = document.getElementById('btnMinus');
  const taskList = document.getElementById('task-list');
  const input = document.getElementById('task-input');

  const maxTasks = 12;

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(taskObj => addTask(taskObj.text, taskObj.completed, false));

  increaseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === '') return;
    if (taskList.children.length >= maxTasks) return;

    addTask(text, false, true);
    input.value = '';
  });

  decreaseBtn.addEventListener('click', () => {
    removeTask();
  });

  function addTask(text, completed = false, saveToStorage = true) {
    const task = document.createElement('li');
    task.classList.add('todo-item', 'add-animate');
    if (completed) task.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('task_name');

    task.appendChild(span);
    taskList.appendChild(task);

    const taskIndex = taskList.children.length - 1;

    task.addEventListener('click', () => {
      task.classList.toggle('completed');
      tasks[taskIndex].completed = task.classList.contains('completed');
      saveTasks();
    });

    task.addEventListener('animationend', () => {
      task.classList.remove('add-animate');
    }, { once: true });

    if (saveToStorage) {
      tasks.push({ text: text, completed: false });
      saveTasks();
    }
  }

  function removeTask() {
    const task = taskList.lastElementChild;
    if (!task) return;
    if (task.classList.contains('remove-animate')) return;

    task.classList.add('remove-animate');

    task.addEventListener('animationend', () => {
      task.remove();
      tasks.pop();
      saveTasks();
    }, { once: true });
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
