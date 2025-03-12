const todoList = [];
const projects = [];
const notes = [];

class Item {
    constructor(title, description, date, priority, project, complete){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priorty = priority;
        this.project = project;
        this.complete = complete;

        // similar to read toggle?
    }
}
// class Project{
//     constructor(title){
//         this.title = title;
//     }
// }
// class Note{
//     constructor(note){
//         this.note = note;
//     }
// }

function markComplete(item){
    if(item.complete){
        item.complete = false
    }
    else{
        item.complete = true;
    }
}

function addTodoItem(item){
    const card = document.createElement('div');
    card.classList.add('collapse');

    const cardDetail = document.createElement('div');
    const priorityBar = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = `${item.title}`;
    const dueDate = document.createElement('p');
    dueDate.textContent = `${item.date}`;

    const editButton = document.createElement('button');
    const delButton = document.createElement('button');

    cardDetail.appendChild(title);
    cardDetail.appendChild(dueDate);

    card.appendChild(priorityBar);
    card.appendChild(cardDetail);
    card.appendChild(editButton);
    card.appendChild(delButton);

    return card;
    //collapsible idk if i wanna do this
}

const formButton = document.getElementById('new');
const dialog = document.querySelector('dialog');
const tabContent = document.getElementsByClassName('tabcontent');
const tabButtons = document.getElementsByClassName("tabs");

// tabButtons.addEventListener('click', () => { 
// // event?
// })

formButton.addEventListener('click', () =>{
    tabContent[0].style.display = 'block'
    for (let i = 1; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    dialog.showModal();
})

const todoInput = document.getElementsByClassName('todo-input');
const projectInput = document.getElementById('project-title');
const noteInput = document.getElementById('note-info');
const todoButton = document.querySelector('.todo');
const projectButton = document.querySelector('.project');
const noteButton = document.querySelector('.note');

todoButton.addEventListener('click', () => {
    const todo = new Item(todoInput[0], todoInput[1], todoInput[2], todoInput[3], todoInput[4], false)
    todoList.push(todo);
})
// do i need .value?
projectButton.addEventListener('click', projects.push(projectInput));
noteButton.addEventListener('click', notes.push(noteInput));


// item.project to sort them into the right tabs
const content = document.getElementById('content');
for (let item in todoList){
    content.appendChild(addTodoItem(item));
}

