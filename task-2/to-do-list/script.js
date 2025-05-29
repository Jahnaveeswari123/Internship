function addTask() {
    let taskInput = document.getElementById("taskInput");
    let errorMsg = document.getElementById("errorMsg");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        errorMsg.textContent = "⚠️ Please enter a task!";
        errorMsg.style.color = "red";
        return;
    }

    errorMsg.textContent = ""; // Clears error message when input is valid

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌DELETE";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clears input after adding task
}