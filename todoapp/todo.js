let input = document.getElementById("todo-input");
let add = document.getElementById("add-todo");
let list = document.getElementById("todo-list");
let show = document.getElementById("show");
let clear = document.getElementById("clear-todos");


add.addEventListener("click", function() {
    let newTask = input.value.trim();

    if(newTask === "") {    
        alert("please enter a task");
        return;
    }

    let listItem = document.createElement("li");

    let taskText = document.createTextNode(newTask);

    listItem.appendChild(taskText);

    list.appendChild(listItem);
    input.value = "";
});

show.addEventListener("click", function() {
    let tasks = list.getElementsByTagName("li");
    if(tasks.length === 0) {
        alert("No tasks to show");
        return;
    }   
    let taskArray = [];
    for(let i = 0; i < tasks.length; i++) {
        taskArray.push(tasks[i].textContent);
    }       

    alert("Tasks:\n" + taskArray.join("\n"));
});

clear.addEventListener("click", function() {
    list.innerHTML = "";
});
