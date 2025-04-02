import "./style.css"; 
import background from "./background.jpg";
export { addTodoItem, addNotes, addProject };

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

// function markComplete(item){
//     if(item.complete){
//         item.complete = false
//     }
//     else{
//         item.complete = true;
//     }
// }

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
    editButton.textContent = 'Edit'
    const delButton = document.createElement('button');
    delButton.textContent = 'Delete'
    const completeButton = document.createElement('button'); //edit visual checkbox
    completeButton.textContent = 'Done?'
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
        console.log(todoList) 
    });

    editButton.addEventListener('click', function(){
        updateForm(item);
        editButton.parentElement.remove();
        // goal is to remove after
    })
}

function updateForm(item){
    const container = document.getElementById('container')
    const updateDialog = document.createElement('dialog')
    const formBox = document.createElement('form')
    formBox.setAttribute('method', 'dialog')

    //title
    const updateTitle = document.createElement('input')
    updateTitle.setAttribute('type', 'text')
    updateTitle.setAttribute('name', 'item-title')
    updateTitle.setAttribute('placeholder', 'Title')

    //detail
    const updateDetail = document.createElement('input')
    updateDetail.setAttribute('type', 'text')
    updateDetail.setAttribute('name', 'detail')
    updateDetail.setAttribute('placeholder', 'Details')

    //date
    const dateLabel = document.createElement('label')
    dateLabel.textContent = 'Due Date: '
    dateLabel.setAttribute('for', 'date')

    const updateDate = document.createElement('input')
    updateDate.setAttribute('type', 'date')
    updateDate.setAttribute('name', 'date')

    //priority
    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    priorityLabel.setAttribute('for', 'priority')

    const updatePriority = document.createElement('select')
    updatePriority.setAttribute('name', 'project')

    const highPriority = document.createElement('option')
    highPriority.setAttribute('value', 'high')
    highPriority.textContent = 'High'

    const medPriority = document.createElement('option')
    medPriority.setAttribute('value', 'med')
    medPriority.textContent = 'Med'

    const lowPriority = document.createElement('option')
    lowPriority.setAttribute('value', 'low')
    lowPriority.textContent = 'Low'

    updatePriority.appendChild(highPriority)
    updatePriority.appendChild(medPriority)
    updatePriority.appendChild(lowPriority)

    //project
    const projectLabel = document.createElement('label')
    projectLabel.textContent = 'Project: '
    const updateProject = document.createElement('select')
    const noProject = document.createElement('option')
    noProject.textContent = 'N/A'
    noProject.setAttribute('value', ``)
    updateProject.appendChild(noProject)

    projectArray.forEach((project) => {
        const projectName = document.createElement('option')
        projectName.textContent = `${project}`
        projectName.setAttribute('value', `${project}`)
        updateProject.appendChild(projectName)
    })

    const updateButton = document.createElement('button')
    updateButton.textContent = 'Update'
    updateButton.setAttribute('type', 'submit')
    updateButton.setAttribute('formmethod', 'dialog')

    //append
    formBox.appendChild(updateTitle)
    formBox.appendChild(updateDetail)
    formBox.appendChild(dateLabel)
    formBox.appendChild(updateDate)
    formBox.appendChild(priorityLabel)
    formBox.appendChild(updatePriority)
    formBox.appendChild(projectLabel)
    formBox.appendChild(updateProject)
    formBox.appendChild(updateButton)

    updateDialog.appendChild(formBox)

    container.appendChild(updateDialog)

    updateButton.addEventListener('click', function(){
        const newItem = new Item(updateTitle.value, updateDetail.value, updateDate.value, updatePriority.value, updateProject.value, false)
        const index = todoList.indexOf(item)
        todoList.splice(index, 1, newItem)
        console.log(todoList) 

        addTodoItem(newItem)
        } 
    )

    updateDialog.showModal();
    
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
        content.innerHTML = ''
        let projectItems = todoList.filter(item => {
            return item.project === project 
        })

        projectItems.forEach((item) => addTodoItem(item))
        }
    )
}

function addNotes(note){
    const noteCard = document.createElement('div');
    noteCard.textContent = `${note}`
    const delButton = document.createElement('button');

    noteCard.appendChild(delButton) 
    content.appendChild(noteCard);

    delButton.addEventListener('click', function(){
        delButton.parentElement.remove();
        const index = notesArray.indexOf(note)
        notesArray.splice(index,1)
    });
}


// tab switch/form display
const formButton = document.getElementById('new');
const dialog = document.getElementById('dialog');
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
const todoButton = document.getElementById('add-todo');
const projectButton = document.getElementById('add-project');
const noteButton = document.getElementById('add-note');

todoButton.addEventListener('click', () => {
    const todo = new Item(todoInput[0].value, todoInput[1].value, todoInput[2].value, todoInput[3].value, todoInput[4].value, false)
    addTodoItem(todo);
    todoList.push(todo);
    console.log(todoList) //defined if in function ORDER MATTERS
})

noteButton.addEventListener('click', () => {
    notesArray.push(noteInput.value);
    console.log(notesArray);
})
    
projectButton.addEventListener('click', ()=>{
    addProject(projectInput.value); 
    projectArray.push(projectInput.value);
    console.log(projectArray)
});

//tab switch mechanism
const homeTab = document.getElementById('home-tab')
const noteTab = document.getElementById('note-tab')

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

// add image
const backgroundImg = document.createElement('img')
backgroundImg.src = background

document.body.appendChild(backgroundImg)