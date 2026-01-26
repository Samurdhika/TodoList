const addBtn = document.getElementById("addBtn");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // create list item
  const li = document.createElement("li");
  li.textContent = text;

  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  // remove logic
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = "";
});
