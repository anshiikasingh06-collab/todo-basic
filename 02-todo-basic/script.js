let taskArr = [];

  taskArr = JSON.parse(localStorage.getItem('taskArr'));
  if(taskArr === null){taskArr = []; }
  renderHTML(); //saved tasks appear when the page loads

 //Add tasks
 function addTask(){
  const inputElem = document.querySelector('.input-task');  
  const value = inputElem.value; 

  const dateInput = document.querySelector('.input-date');
  const date = dateInput.value;

  taskArr.push({
    name : value,
    complete : false,
    date: date
 });

  inputElem.value = '';
  console.log(taskArr);
  dateInput.value = '';

  renderHTML();

  localStorage.setItem('taskArr', JSON.stringify(taskArr));
}


//Render html
function renderHTML(){
  let html  = '';

  for(let i = 0; i < taskArr.length; i++){
       html = html + `
       <div class="task-row">
         <span class="${taskArr[i].complete ? 'complete' : ''}">${taskArr[i].name}</span>

         <span class="date-js">${new Date(taskArr[i].date).toLocaleDateString()}</span>
    
         <button onclick="deleteTask(${i})" class="btn-delete">Delete</button>

         <button onclick="completeTask(${i})" class="btn-compelete">Complete</button>
       </div>
       `
  }

  document.querySelector('.task-lists').innerHTML = html;
}


//Delete Tasks
function deleteTask(index){
   taskArr.splice(index, 1);

    renderHTML();

      localStorage.setItem('taskArr', JSON.stringify(taskArr));
}


//Complete tasks
function completeTask(index){
  
  taskArr[index].complete = !taskArr[index].complete;
  
  renderHTML();

    localStorage.setItem('taskArr', JSON.stringify(taskArr));
}

