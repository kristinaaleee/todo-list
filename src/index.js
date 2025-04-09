// import "./style.css"; 
// import { addTodoItem, addNotes, addProject } from "./logic.js";

// // tab switch/form display
// const formButton = document.getElementById('new');
// const dialog = document.getElementById('dialog');
// const tabContent = document.getElementsByClassName('tabcontent');
// const tabButtons = document.getElementsByClassName("tabs");

// function tabClear(){
//     for (let i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = 'none';
//     }
// }

// formButton.addEventListener('click', () =>{
//     tabClear();
//     tabContent[0].style.display = 'block';
//     dialog.showModal();
// })

// for (let i = 0; i < tabContent.length; i++){
//     tabButtons[i].addEventListener('click', () =>{
//         tabClear();
//         tabContent[i].style.display = 'block';
//     })
// }

// //data collection
// const todoInput = document.getElementsByClassName('todo-input');
// const projectInput = document.getElementById('project-title');
// const noteInput = document.getElementById('note-info');
// const todoButton = document.getElementById('add-todo');
// const projectButton = document.getElementById('add-project');
// const noteButton = document.getElementById('add-note');

// todoButton.addEventListener('click', () => {
//     const todo = new Item(todoInput[0].value, todoInput[1].value, todoInput[2].value, todoInput[3].value, todoInput[4].value, false)
//     addTodoItem(todo);
//     todoList.push(todo);
//     console.log(todoList) //defined if in function ORDER MATTERS
// })

// noteButton.addEventListener('click', () => {
//     notesArray.push(noteInput.value);
//     console.log(notesArray);
// })
    
// projectButton.addEventListener('click', ()=>{
//     addProject(projectInput.value); 
//     projectArray.push(projectInput.value);
//     console.log(projectArray)
// });

// //tab switch mechanism
// const homeTab = document.getElementById('home-tab')
// const noteTab = document.getElementById('note-tab')

// homeTab.addEventListener('click', () => {
//     content.innerHTML = ''
//     for (let item in todoList){
//         addTodoItem(todoList[item]);
//         console.log(todoList[item]);
//     }
// })

// noteTab.addEventListener('click', () => {
//     content.innerHTML = ''
//     for (let note in notesArray){
//         addNotes(notesArray[note]);
//         console.log(notesArray[note]);
//     }
// })

//LOCAL STORAGE TESTER FILE
// class Item {
//     constructor(title, description, date, priority, project, complete){
//         this.title = title;
//         this.description = description;
//         this.date = date;
//         this.priorty = priority;
//         this.project = project;
//         this.complete = complete;
//     }
//     completeToggle(){
//         if (this.complete == false) {
//             return this.complete = true
//         }
//         else {
//             return this.complete = false
//         }
//     }
// }


//get, parse, read, print

//add array to local storage everytime new component is added

//.get array, .parse, push, .set(stringify)
// function addItemLocal(item){
//     localStorage.setItem(`${item.title}`, JSON.stringify(item))
// }

// function addProjectLocal(project){
//     localStorage.setItem(`${project}`, project)
// }

// function addNotesLocal(note){
//     localStorage.setItem(`${note}`, note)
// }
// // tab switch/form display
// const formButton = document.getElementById('new');
// const dialog = document.getElementById('dialog');
// const tabContent = document.getElementsByClassName('tabcontent');
// const tabButtons = document.getElementsByClassName("tabs");

// function tabClear(){
//     for (let i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = 'none';
//     }
// }

// formButton.addEventListener('click', () =>{
//     tabClear();
//     tabContent[0].style.display = 'block';
//     dialog.showModal();
// })

// for (let i = 0; i < tabContent.length; i++){
//     tabButtons[i].addEventListener('click', () =>{
//         tabClear();
//         tabContent[i].style.display = 'block';
//     })
// }