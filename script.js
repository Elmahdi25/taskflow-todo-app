let todo_list = [];
function add_task() {
  const todo_input = document.querySelector(".todo_input");
  const todo_value = todo_input.value;
  const date_input = document.querySelector(".date_input");
  const today = new Date();
  const date_value =
    date_input.value ||
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  let [year, month, day] = date_value.split("-");
  const formatted_date = `${day}/${month}/${year}`;

  todo_list.push({ name: todo_value, date: formatted_date });
  todo_input.value = "";
  date_input.value = "";
  generate_HTML();
}

function generate_HTML() {
  let tasks_box = document.querySelector(".tasks_box");
  tasks_box.innerHTML = "";
  for (let i = 0; i < todo_list.length; i++) {
    const object = todo_list[i];
    tasks_box.innerHTML += `
    <p>
        ${object.name}
        ${object.date}
        <button onclick=delete_task(${i}) >Delete</button>
    </p>
      `;
  }
}

function delete_task(index) {
  todo_list.splice(index, 1);
  generate_HTML();
}
function handle_enter_btn(event) {
  if (event.key === "Enter") {
    add_task();
  }
}
