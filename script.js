// ==== Todo CRUD Management ====
// Array to store todos
let todos = []
// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//Fuction to render todos
function renderTodos() {
    todoList.innerHTML = ''; //Clear the list
    todos.forEach((todo, index) =>{
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML - `
            <span>${todo}</span>
            <button onclick="editionTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
            `;
            todoList.appendChild(li);
    });
}

// Function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo:', todos[index]);
    if(updatedTodo !== null){ 
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

//Function to add todo
function editTodo(event){
    event.preventDefault();
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo){
        todos.push(newTodo);
        todoInput.value = '',
        rederTodos();
    }
}

//Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo')){
        todos.splice(index, 1);
        renderTodos();
    }
}
//event listeners
todoForm.addEventListener('submit', addTodo);

//initial render
rederTodos();