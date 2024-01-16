const taskList = document.getElementById('taskList');
const taskInput = document.querySelector("#taskInput");

// console.log(taskList)
// console.log(taskList.innerHTML)

// taskList.innerHTML = "<h3> Changed </h3>"

taskInput.addEventListener("keyup" , function(event) {
    if (event.key == "Enter") {
        console.log(this.value)
        addTask(this.value)
        this.value = ""
    }
})

const addTask = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item} <span> X </span>
    `
    listItem.addEventListener("click", function(){
        this.classList.toggle("done")
    })
    listItem.querySelector("span").addEventListener("click", function(event) {
        listItem.remove()
    })
    taskList.appendChild(listItem)
}
