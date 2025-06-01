const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const toDoAdd = document.getElementById("toDoAdd");
const timeDisplay = document.getElementById("timeDisplay");

let editIndex = null;

// Get todos from localStorage
const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render all todos to the UI
const renderTodos = () => {
  const todos = getTodos();
  toDoAdd.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.textContent = todo;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "editBtn");
    editBtn.onclick = () => {
      inputBox.value = todo;
      inputBox.focus();
      addBtn.value = "Edit";
      editIndex = index;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    deleteBtn.onclick = () => {
      const todos = getTodos();
      todos.splice(index, 1);
      saveTodos(todos);
      renderTodos();
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    toDoAdd.appendChild(li);
  });
};

// Add or edit todo when Add/Edit button is clicked
addBtn.addEventListener("click", () => {
  const inputText = inputBox.value.trim();
  if (!inputText) {
    alert("Please write something");
    return;
  }

  const todos = getTodos();

  if (addBtn.value === "Edit" && editIndex !== null) {
    todos[editIndex] = inputText;
    addBtn.value = "Add";
    editIndex = null;
  } else {
    todos.push(inputText);
  }

  inputBox.value = "";
  saveTodos(todos);
  renderTodos();
});

// Update real-time clock
function updateTime() {
  const now = new Date();
  timeDisplay.textContent = now.toLocaleString();
}

// Call time update every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Initial render of todos from localStorage
renderTodos();
