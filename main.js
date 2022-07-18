const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formFunc);

function formFunc(event) {
    event.preventDefault();
    const taskText = todoInput.value;
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    todoList.append(newTask);


    todoInput.value = '';
    todoInput.focus();


    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('role', 'button');
    deleteItem.innerText =  '✗';
    deleteItem.style.marginLeft = '10px';
    deleteItem.style.borderRadius = '15px';
    deleteItem.style.backgroundColor = 'red';
    deleteItem.style.color = 'azure ';
    deleteItem.style.cursor = 'pointer';
    deleteItem.style.fontSize = '15px';
    deleteItem.style.border = 'none';
    deleteItem.style.marginBottom = '6px';
    



    newTask.append(deleteItem);
    deleteItem.addEventListener('click', function(){
        this.closest('li').remove();
    })

}























