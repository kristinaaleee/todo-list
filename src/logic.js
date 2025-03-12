const todoList = [];
class Item {
    constructor(title, description, date, priority, complete){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priorty = priority;
        this.complete = complete;
    }
}
class Project{
    constructor(title){
        this.title = title;
    }
}
class Note{
    constructor(note){
        this.note = note;
    }
}

function addProject(project){
    const input = document.querySelector()
}

function markComplete(item){
    if(item.complete){
        item.complete = false
    }
    else{
        item.complete = true;
    }
}

function addTodoItem(item){
    const button = document.createElement('button')
    button.classList.add('collapse')
    const card = document.createElement('div');
    card.classList.add('item');
    todoList.push(item);

    const title = document.createElement('h2');
    title.textContent = `${item.title}`

    //collapsible idk if i wanna do this

}