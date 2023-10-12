// Sélection des différents éléments
const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

// Fonction addTaskList
function addTaskList () {
    // Récupération valeur input
    const taskText = taskInput.value.trim()

    // Création de l'élément à afficher
    const taskItem = document.createElement("li")
    taskItem.textContent = taskText
    taskList.appendChild(taskItem)
}

addTaskButton.addEventListener("click", addTaskList)
