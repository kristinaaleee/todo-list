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
        this.priority = priority;
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

const listWrapper = document.getElementById('list-wrapper');

function addTodoItem(item){
    const card = document.createElement('div');
    card.classList.add('collapse');

    const infoWrapper = document.createElement('div')
    infoWrapper.classList.add('row')

    const cardDetail = document.createElement('div');
    cardDetail.setAttribute('id', 'card-detail')

    const cardContent = document.createElement('div');
    cardContent.classList.add('content');
    cardContent.textContent = `${item.description}`

    const priorityBar = document.createElement('div');
    priorityBar.setAttribute('id','priority')
    switch(item.priority){
        case 'high':
            priorityBar.style.backgroundColor = '#E45457'
            break;
        case 'med':
            priorityBar.style.backgroundColor = '#F2BC48'
            break;
        case 'low':
            priorityBar.style.backgroundColor = '#7ABF4F'
            break;
    }

    const title = document.createElement('h3');
    title.textContent = `${item.title}`;
    const dueDate = document.createElement('p');
    dueDate.textContent = `${item.date}`;

    const buttonWrapper = document.createElement('div')
    buttonWrapper.setAttribute('id', 'button-wrapper')
    const editButton = document.createElement('button');
    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>'

    const delButton = document.createElement('button');
    delButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'
    const completeButton = document.createElement('input');
    completeButton.setAttribute('type', 'checkbox')

    cardDetail.appendChild(title);
    cardDetail.appendChild(dueDate);

    infoWrapper.appendChild(priorityBar)
    infoWrapper.appendChild(completeButton)
    infoWrapper.appendChild(cardDetail)


    buttonWrapper.appendChild(editButton);
    buttonWrapper.appendChild(delButton)

    card.appendChild(infoWrapper);
    card.appendChild(buttonWrapper);
    
    listWrapper.appendChild(card);
    listWrapper.appendChild(cardContent);

    delButton.addEventListener('click', function(){
        card.remove()
        cardContent.remove();
        const index = todoList.indexOf(item)
        todoList.splice(index,1)
    });

    editButton.addEventListener('click', function(){
        updateForm(item);
        // goal is to remove after
    })

    card.addEventListener('click', () =>{
        card.classList.toggle('active');
        if (cardContent.style.maxHeight){
            cardContent.style.maxHeight = null;
        }
        else {
            cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
        }
    })
}

function updateForm(item){
    const container = document.getElementById('container')
    const updateDialog = document.createElement('dialog')
    const formWrapper = document.createElement('div')
    formWrapper.classList.add('form-wrapper')
    const formBox = document.createElement('form')
    formBox.setAttribute('method', 'dialog')
    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add('tabcontent')

    //tab
    const updateTabWrapper = document.createElement('div')
    updateTabWrapper.classList.add('tab-wrapper')
    const titleDiv = document.createElement('div')
    titleDiv.textContent = 'Update To-Do Item'
    titleDiv.classList.add('tabs')
    
    updateTabWrapper.appendChild(titleDiv)

    //title
    const updateTitle = document.createElement('input')
    updateTitle.setAttribute('type', 'text')
    updateTitle.setAttribute('name', 'item-title')
    updateTitle.setAttribute('placeholder', 'Title')

    //detail
    const updateDetail = document.createElement('textarea')
    updateDetail.setAttribute('placeholder', 'Details')

    //date
    const dateWrapper = document.createElement('div')
    const dateLabel = document.createElement('label')
    dateLabel.textContent = 'Due Date: '
    dateLabel.setAttribute('for', 'date')

    const updateDate = document.createElement('input')
    updateDate.setAttribute('type', 'date')
    updateDate.setAttribute('name', 'date')

    dateWrapper.appendChild(dateLabel)
    dateWrapper.appendChild(updateDate)

    //priority
    const priorityWrapper = document.createElement('div')
    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    priorityLabel.setAttribute('for', 'priority')

    const updatePriority = document.createElement('select')
    updatePriority.setAttribute('name', 'priority')
    updatePriority.setAttribute('id', 'priority-select')
    updatePriority.setAttribute('multiple', 'multiple')

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

    priorityWrapper.appendChild(priorityLabel)
    priorityWrapper.appendChild(updatePriority)

    //project
    const projectWrapper = document.createElement('div')
    const projectLabel = document.createElement('label')
    projectLabel.textContent = 'Project: '
    const updateProject = document.createElement('select')
    updateProject.setAttribute('id', 'project-select')
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

    projectWrapper.appendChild(projectLabel)
    projectWrapper.appendChild(updateProject)
    
    formBox.appendChild(updateTitle)
    formBox.appendChild(updateDetail)
    formBox.appendChild(dateWrapper)
    formBox.appendChild(priorityWrapper)
    formBox.appendChild(projectWrapper)
    formBox.appendChild(updateButton)

    contentWrapper.appendChild(formBox)
    
    formWrapper.appendChild(updateTabWrapper)
    formWrapper.appendChild(contentWrapper)

    updateDialog.appendChild(formWrapper)

    container.appendChild(updateDialog)

    updateButton.addEventListener('click', function(){
        const newItem = new Item(updateTitle.value, updateDetail.value, updateDate.value, updatePriority.value, updateProject.value, false)
        const index = todoList.indexOf(item)
        todoList.splice(index, 1, newItem)
        console.log(todoList) 
        formBox.reset()

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
        listWrapper.innerHTML = ''
        let projectItems = todoList.filter(item => {
            return item.project === project 
        })
        projectItems.forEach((item) => addTodoItem(item))
        }
    )
}
const noteContainer = document.createElement('div')
noteContainer.setAttribute('id', 'note-container');
function addNotes(note){
    const noteCard = document.createElement('div');
    noteCard.classList.add('note')
    noteCard.textContent = `${note}`
    const delButton = document.createElement('button');

    noteCard.appendChild(delButton) 
    noteContainer.appendChild(noteCard);
    listWrapper.appendChild(noteContainer)

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
        tabButtons[i].classList.remove('active')
    }
}

formButton.addEventListener('click', () =>{
    tabClear();
    tabContent[0].style.display = 'block';
    tabButtons[0].classList.add('active');
    dialog.showModal();
})

for (let i = 0; i < tabContent.length; i++){
    tabButtons[i].addEventListener('click', () =>{
        tabClear();
        tabContent[i].style.display = 'block';
        tabButtons[i].classList.add('active')
    })
}

//data collection
let todoInput = document.getElementsByClassName('todo-input');
const projectInput = document.getElementById('project-title');
const noteInput = document.getElementById('note-info');
const todoButton = document.getElementById('add-todo');
const projectButton = document.getElementById('add-project');
const noteButton = document.getElementById('add-note');

todoButton.addEventListener('click', () => {
    const todo = new Item(todoInput[0].value, todoInput[1].value, todoInput[2].value, todoInput[3].value, todoInput[4].value, false)
    addTodoItem(todo);
    todoList.push(todo);
    dialog.close();
    for (let i = 0; i < todoInput.length; i++){
        todoInput[i].value = '';
    }
})

noteButton.addEventListener('click', () => {
    addNotes(noteInput.value)
    notesArray.push(noteInput.value);
    noteInput.value = '';
})
    
projectButton.addEventListener('click', ()=>{
    addProject(projectInput.value); 
    projectArray.push(projectInput.value);
    projectInput.value = '';
});

//tab switch mechanism
const homeTab = document.getElementById('home-tab')
const noteTab = document.getElementById('note-tab')

homeTab.addEventListener('click', () => {
    listWrapper.innerHTML = ''
    for (let item in todoList){
        addTodoItem(todoList[item]);
        console.log(todoList[item]);
    }
})

noteTab.addEventListener('click', () => {
    listWrapper.innerHTML = ''
    noteContainer.innerHTML = ''
    for (let note in notesArray){
        addNotes(notesArray[note]);
        console.log(notesArray[note]);
    }
})

// add image
const backgroundImg = document.createElement('img')
backgroundImg.src = background

document.body.appendChild(backgroundImg)

// connect to local storage by setting array

