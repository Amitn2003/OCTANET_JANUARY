const inputBox = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// let i = 0;

const deleteTask = (taskIndex) => {
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); 
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      updateTaskList(tasks);
}




inputBox.addEventListener("keyup", (event) => {
  if (event.key == "Enter" && inputBox.value != "") {
    console.log(inputBox.value);
    let li = document.createElement("li");
    li.innerHTML = `<li> <img src="checkbox-icon.svg" alt="" srcset=""> ${inputBox.value} <span onclick="deleteTask(${tasks.length})" >X</span></li>`;
    li.addEventListener("click", function () {
      this.classList.toggle("done");
    });

    taskList.appendChild(li);
    tasks.push(inputBox.value);
    
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    inputBox.value = "";
  }
});



const updateTaskList = (tasks) => {
  taskList.innerHTML = "";
  for (i in tasks) {
    console.log(tasks[i]);
    let li = document.createElement("li");
    li.innerHTML = `<li> <img src="checkbox-icon.svg" alt="" srcset=""> ${tasks[i]} 
    <span onclick="deleteTask(${i})" >X</span>
    </li>`;
    li.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    taskList.appendChild(li);
  }
  inputBox.innerText = "";
};
updateTaskList(tasks);
