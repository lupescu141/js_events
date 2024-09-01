// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
var ul = document.getElementById("todo");
const dialog = document.querySelector("dialog");

function updateList (checkboxId) {
  var checkBox = document.getElementById(checkboxId);

  if (checkBox.checked == true){
    todoList[checkboxId - 1].completed = true;
  }

  else {
    todoList[checkboxId - 1].completed = false;
  }

  console.log(todoList[checkboxId - 1])
}

function deleteItem(element){
 var id = element.parentNode.children[0].id;
 console.log(id);
 todoList.splice(id - 1, 1);
 ul.removeChild(element.parentNode)
 var newListId = 1;
 todoList.forEach(element => {
  element.id = newListId;
  child = ul.children[newListId - 1];
  child.children[0].id = newListId;
  console.log(child.children[0]);
  newListId += 1;
 })
 console.log(todoList);
}

function openDialog(){
  dialog.showModal();
}

function pushToUl (element){
  ul.insertAdjacentHTML('beforeend', 
    `<li><input type="checkbox" id="${JSON.stringify(element.id)}" onClick="updateList(this.id)">
    <label for="${JSON.stringify(element.id)}">${JSON.stringify(element.task)}</label>
    <button  onclick="deleteItem(this)">Delete</button>
    </li>
    `);
}

function addItem(){ 
const task = document.getElementById("task").value;
const newItemId = todoList.length;

if(task == ""){
  dialog.close();
  alert("Input field is empty!");
  return
}

 var newItem ={
  id: newItemId + 1,
  task: task,
  completed: false,
 }

 todoList.push(newItem);
 pushToUl(todoList[newItemId]);
 dialog.close();
}

todoList.forEach(element => {
  pushToUl(element);
  document.getElementById(`${element.id}`).checked = element.completed;
});