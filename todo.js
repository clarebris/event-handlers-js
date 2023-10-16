
   const input = document.getElementById('new_task_input');
   const btn = document.getElementById('btn');
   const list = document.getElementById('list');
 
   btn.addEventListener('click', handleclick);
      event.preventDefault();
      event.stopPropagation();
     const trimmed_text = new_task_input.value.trim();

  let new_title= input.value;
  if(new_title.trim () !=="") {
    let new_task= createTask(new_title);
    mountTask2Dom(new_task);
  }
  else{
    alert("task cannot be empty");
  }
  input.value=""

  function createTask(title){

    const new_task= document.createElement('div');
    new_task.classList.add('task');
    
     const span = document.createElement('span');
     span.innerText= title;


    const delete_button = document.createElement('button');
     delete_button.innerText= "delete";

     // append task

    new_task.append(span,delete_button);
    return new_task; 
  }


  function mountTask2Dom(task_node){
    task_container.append(task_node);
  }

  // deleting task

  task_container.addEventListener('click', handleDelete);
  function handleDelete(event){
      const targetElement = event.target;


  }

     
    /* if (trimmed_text !== "") {
       const listItem = document.createElement('li');
       listItem.textContent = trimmed_text;
       listItem.className = 'todo-item';
       listItem.dataset.completed = 'false';*/

       const deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Delete';
       deleteBtn.className = 'delete-button';
       deleteBtn.addEventListener('click', function() {
         listItem.remove(); 
       });

       listItem.addEventListener('click', function() {
         if (listItem.dataset.completed === 'false') {
           listItem.dataset.completed = 'true';
           listItem.style.textDecoration = 'line-through'; 
         } else {
           listItem.dataset.completed = 'false';
           listItem.style.textDecoration = 'none'; 
         }
       });

       
      
       listItem.appendChild(deleteBtn);
 
       
       list.appendChild(listItem);
 
      
       new_task_input.value = '';
     }
   });
 });