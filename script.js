let input = document.querySelector(".input");
let addBtn = document.querySelector(".btn_add");

let eventBox = document.querySelector(".event_list")




addBtn.addEventListener("click", () => {
  let oneEvent = document.createElement('div');
  oneEvent.className = "one_event";
  // p
  let task = document.createElement('p');
  task.className = "par";
  task.style.display = "inline-block";
  task.innerHTML = input.value;
  // deleteBtn
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete_btn";
  deleteBtn.innerHTML = "X";
  // changeBtn
  let changeBtn = document.createElement("button");
  changeBtn.className = "change_btn";
  changeBtn.innerHTML = "Change";





  // Add elements
  oneEvent.appendChild(task);
  oneEvent.appendChild(deleteBtn);
  oneEvent.appendChild(changeBtn);
  eventBox.appendChild(oneEvent);



  // localStorage

  saveEvent(input.value);


  // delete

  deleteBtn.addEventListener('click', () => {
    oneEvent.parentNode.removeChild(oneEvent);
    if (localStorage.getItem("tasks") === null) {

    } else {
      arr = JSON.parse(localStorage.getItem('tasks'));
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == task.innerHTML) {
        arr.splice(i, 1);
      }
    }
    localStorage.setItem("tasks", JSON.stringify(arr));
  })

})






function saveEvent(div_value) {
  let arr;
  if (localStorage.getItem("tasks") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem('tasks'));
  }

  arr.push(div_value);
  localStorage.setItem("tasks", JSON.stringify(arr));
}

function load() {
  let arr;
  if (localStorage.getItem("tasks") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem('tasks'));
  }

  arr.forEach(function (e) {
    let oneEvent = document.createElement('div');
    oneEvent.className = "one_event";
    // p
    let task = document.createElement('p');
    task.className = "par";
    task.style.display = "inline-block";
    task.innerHTML = e;
    // deleteBtn
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_btn";
    deleteBtn.innerHTML = "X";
    // changeBtn
    let changeBtn = document.createElement("button");
    changeBtn.className = "change_btn";
    changeBtn.innerHTML = "Change";





    // Add elements
    oneEvent.appendChild(task);
    oneEvent.appendChild(deleteBtn);
    oneEvent.appendChild(changeBtn);
    eventBox.appendChild(oneEvent);
  })
}


load();



let deleteBtns = document.querySelectorAll(".delete_btn");


deleteBtns.forEach(e => e.addEventListener("click", () => {
  e.parentNode.remove();
  let arr = JSON.parse(localStorage.getItem('tasks'));;

  let deleteElem = e.previousSibling.innerHTML;
  let arrIndex = arr.indexOf(deleteElem);
  arr.splice(arrIndex, 1);
  console.log(arr);
  localStorage.setItem("tasks", JSON.stringify(arr));

}))