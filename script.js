// Clock
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleString();
}

// Add Task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Complete Task
function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
}

// Remove Task
function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();