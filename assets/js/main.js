var todoText = document.getElementById(`todo-textarea`);
var deadlineText = document.getElementById(`deadline`);
var addCard = $(`#add-card`);

var addButton = document.getElementById(`add-button`);
var checklist = document.getElementById(`checklist`);
var close = document.getElementById(`close`);
var card = document.getElementsByClassName(`card`)

var todolist = [];
var todo;
var deadline;

function addToDo() {
  var todoA = todoText.value;
  var deadlineA = deadlineText.value;

  todolist.push({
    'todo': todoA,
    'deadline': deadlineA
  });

  todo = todoA;
  deadline = deadlineA;
}

function addCards() {
  addToDo();
  var node = `
  <div class="col s12 m4">
    <div class="card yellow">
      <div id="${todo}" class="card-content black-text">
        <p>${todo}</p>
      </div>
      <div class="card-action grey lighten-3">
        <span class="font-bold">${deadline}</span>
        <span class="font-bold checklist-button"><i id="checklist" class="material-icons prefix">check_circle</i></span>
        <span class="font-bold close-button"><i id="close" class="material-icons prefix red-text">delete_forever</i></span>
      </div>
    </div>
  </div>
  `;
  addCard.append(node);
}

function checklistCard() {
  checklist.style.color = `green`;
}

addButton.addEventListener(`click`, addCards);
checklist.addEventListener(`click`, checklistCard)