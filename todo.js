const input = document.getElementById("new_task_input");
const btn = document.getElementById("btn");
const task_container = document.getElementById("task_container");

btn.addEventListener("click", handleclick);
function handleclick(event) {
  event.preventDefault();
  event.stopPropagation();

  let new_title = input.value;
  if (new_title.trim() !== "") {
    let new_task = createTask(new_title);
    mountTask2Dom(new_task);
  } else {
    alert("task cannot be empty");
  }
  input.value = "";
}

function createTask(to_do) {
  const new_task = document.createElement("div");
  new_task.classList.add("task");

  const span = document.createElement("span");
  span.innerText = to_do;

  const delete_button = document.createElement("button");
  delete_button.innerText = "delete";

  // append task

  delete_button.addEventListener("click", () => {
    new_task.remove();
  });

  new_task.append(span, delete_button);
  return new_task;
}

function mountTask2Dom(task_node) {
  task_container.append(task_node);
}

// deleting task

//task_container.addEventListener('click', handleDelete);
//function handleDelete(event){
//  const targetElement = event.target;
// if(targetElement.innerText==="delete"){
  //     task_container.removeChild(targetElement.parentNode)
  
//} else if(targetElement.localName==="span"){}

//}
