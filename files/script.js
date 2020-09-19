function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();

var taskInput = document.querySelector("#col-md-10 description");

var tasks = [];

function addTasks() {
    var storedTasks = JSON.parse(localStorage.getItem("container"));

    if (addTasks !== null) {
        container = storedTasks;
    }
    
    renderTodos();
}




// var tasks = localStorage.getItem("tasks");

// tasksItems.textContent = tasks;


