
const newToDoInput = document.getElementById('new-todo');
const addNewToDoBtn = document.getElementById('add-new-todo');
const clearInputBtn = document.getElementById('clear-input');
const toDoList = document.getElementById('list');


newToDoInput.style.textDecoration


clearInputBtn.addEventListener('click', () => {
    newToDoInput.value = '';
});

addNewToDoBtn.addEventListener('click', () => {
    if (newToDoInput.value.trim() == '') {
        alert('Задача не может быть пустым');
        return;
    }

    const newTask = newToDoInput.value;
    let newTaskInner = `
        <div class="list--item">
            <button onclick="doneToDo(this)">✅</button>
            <p>${newTask}</p>
            <button onclick="deleteToDo(this)">🗑</button>
        </div>
    `;

    toDoList.innerHTML += newTaskInner;    
    newToDoInput.value = '';
});


const deleteToDo = (btn) => {
    const listItem = btn.parentElement;
    toDoList.removeChild(listItem);
}

const doneToDo = (btn) => {
    const p = btn.nextElementSibling;
    
    if (p.style.textDecoration == '') {
        p.style.textDecoration = 'line-through';
    } else {
        p.style.textDecoration = '';
    }
}