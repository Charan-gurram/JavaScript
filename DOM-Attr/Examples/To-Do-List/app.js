const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add new task when button is clicked
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Put everything together
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
