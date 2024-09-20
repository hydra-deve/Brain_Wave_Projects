// scripts.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.className = 'done-btn';
        doneBtn.onclick = function() {
            li.classList.toggle('done');
        };

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.className = 'close';
        closeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(doneBtn);
        li.appendChild(closeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

