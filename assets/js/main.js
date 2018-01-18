var todoText = document.getElementById(`todo-textarea`);
var deadlineText = document.getElementById(`deadline`);
var addCard = $(`#add-card`);

var addButton = document.getElementById(`add-button`);

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
  <div class="col s12 m3">
    <div class="card yellow">
      <div class="card-content black-text">
        <p>${todo}</p>
      </div>
      <div class="card-action grey lighten-3">
        <span class="font-bold">${deadline}</span>
      </div>
    </div>
  </div>
  `;
  addCard.append(node);
}

addButton.addEventListener(`click`, addCards);