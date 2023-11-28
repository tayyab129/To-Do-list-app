const inputBox = document.getElementById("input_box");
const listConatiner = document.getElementById("list_container");

function addTask() {
  if (inputBox.value === "") {
    alert("You Must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; //+' '+ new Date();
    listConatiner.appendChild(li);
    let span = document.createElement("span");

    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value;
  saveData();
}

listConatiner.addEventListener(
  "click",
  function (e) {
    if (e.target.nodeName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.nodeName === "SPAN") {
      e.target.parentElement.remove();
      saveData;
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask() {
  listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();
