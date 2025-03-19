const todoList = [];
const projectArray = [];
const notesArray = [];

class Item {
    constructor(title, description, date, priority, project, complete){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priorty = priority;
        this.project = project;
        this.complete = complete;
    }
}

function markComplete(item){
    if(item.complete){
        item.complete = false
    }
    else{
        item.complete = true;
    }
}

const content = document.getElementById('content');

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
    const completeButton = document.createElement('button'); //edit visual checkbox
    cardDetail.appendChild(title);
    cardDetail.appendChild(dueDate);

    card.appendChild(priorityBar);
    card.appendChild(cardDetail);
    card.appendChild(completeButton);
    card.appendChild(editButton);
    card.appendChild(delButton);
    
    content.appendChild(card);

    delButton.addEventListener('click', function(){
        delButton.parentElement.remove();
        const index = todoList.indexOf(item)
        todoList.splice(index,1)
        console.log(todoList) //THIS WORKS
    });
}

function addProject(project){
    const projectSelect = document.getElementById('project-select')
    const projectOption = document.createElement('option')
    projectOption.setAttribute('value', `${project}`)
    projectOption.textContent = `${project}`
    projectSelect.appendChild(projectOption)

    const projectTab = document.getElementById('project-tab')
    const projectList = document.createElement('div')
    projectList.setAttribute('class','project-list')
    projectList.textContent = `${project}`
    projectTab.appendChild(projectList)

    projectList.addEventListener('click', () => {
        console.log(project)
        //add based on project property of items
    
    })
}

function addNotes(note){
    const noteCard = document.createElement('div');
    noteCard.textContent = `${note}`

    const delButton = document.createElement('button');

    noteCard.appendChild(delButton) 

    content.appendChild(noteCard);
}



// tab switch/form display
const formButton = document.getElementById('new');
const dialog = document.querySelector('dialog');
const tabContent = document.getElementsByClassName('tabcontent');
const tabButtons = document.getElementsByClassName("tabs");

function tabClear(){
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
}

formButton.addEventListener('click', () =>{
    tabClear();
    tabContent[0].style.display = 'block';
    dialog.showModal();
})

for (let i = 0; i < tabContent.length; i++){
    tabButtons[i].addEventListener('click', () =>{
        tabClear();
        tabContent[i].style.display = 'block';
    })
}

//data collection
const todoInput = document.getElementsByClassName('todo-input');
const projectInput = document.getElementById('project-title');
const noteInput = document.getElementById('note-info');
const todoButton = document.querySelector('.todo');
const projectButton = document.querySelector('.project');
const noteButton = document.querySelector('.note');

todoButton.addEventListener('click', () => {
    const todo = new Item(todoInput[0].value, todoInput[1].value, todoInput[2].value, todoInput[3].value, todoInput[4].value, false)
    todoList.push(todo);
    addTodoItem(todo);
    console.log(todoList) //defined if in function ORDER MATTERS
})

noteButton.addEventListener('click', () => {
    // addNotes(noteInput.value);    /// add this to separate event listener for tab?
    notesArray.push(noteInput.value);
    console.log(notesArray);
})
    
projectButton.addEventListener('click', ()=>{
    addProject(projectInput.value); 
    projectArray.push(projectInput.value);
    console.log(projectArray)
});

//project tab button
const homeTab = document.getElementById('home-tab')
const noteTab = document.getElementById('note-tab')
const projectTab = document.getElementsByClassName('project-list')

homeTab.addEventListener('click', () => {
    content.innerHTML = ''
    for (let item in todoList){
        addTodoItem(todoList[item]);
        console.log(todoList[item]);
    }
})

noteTab.addEventListener('click', () => {
    content.innerHTML = ''
    for (let note in notesArray){
        addNotes(notesArray[note]);
        console.log(notesArray[note]);
    }
})

// projectTab.addEventListener('click', (event) => {
//     console.log(event)
// })


// noteButton.addEventListener('click', notes.push(noteInput));


// item.project to sort them into the right tabs
// const content = document.getElementById('content');
// for (let item in todoList){
//     content.appendChild(addTodoItem(item));
// }

