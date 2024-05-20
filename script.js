
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(checkbox);
        li.appendChild(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
// Selecting the task list
var taskList = document.getElementById("task-list");

function toggleTaskUnCompletion(event) {
    var taskItem = event.target.parentNode;
    taskItem.classList.toggle("uncompleted");
}

function toggleTaskCompletion(event) {
    var taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
}

function removeCompletedTasks() {
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
        task.remove();
    });
}
taskList.addEventListener("click", function(event) {
    if (event.target.type === "checkbox") {
        toggleTaskCompletion(event);
    }
});

