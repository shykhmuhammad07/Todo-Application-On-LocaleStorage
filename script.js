{
  var getList = document.getElementById("list");
  var getInput = document.getElementById("todo");

  window.onload = function () {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.forEach((todo, index) => {
      addToDom(todo, index);
    });
  };

  function addToDom(todo) {
    getList.innerHTML += `<li class = 'list-1'> ${todo} <button class = 'btn-3' onclick = 'delItem(this)'><i class="fas fa-trash"></i>
    </button> <button class = 'btn-4' onclick= 'editItem(this)'><i class="fas fa-edit"></i></button> </li>`;
  }

  function addtodo() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let todoText = getInput.value.trim();
    if (!todoText) {
      alert("Fill the field");
    } else {
      data.push(todoText);
      localStorage.setItem("data", JSON.stringify(data));
      addToDom(todoText, data.length - 1);
      getInput.value = "";
    }
  }

  function delItem(event) {
    const list = event.parentNode;
    const lists = Array.from(getList.children);
    let index = lists.indexOf(list);
    list.remove();
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
  }

  function del() {
    getList.innerHTML = "";
    localStorage.removeItem("data");
  }

  function editItem(button) {
    let data = JSON.parse(localStorage.getItem("data")) || [];

    let listItem = button.parentNode;

    let listItems = Array.from(getList.children);
    let index = listItems.indexOf(listItem);

    let currentValue = data[index];
    let updatedValue = prompt("Enter the new value", currentValue);

    if (updatedValue !== null && updatedValue.trim() !== "") {
      data[index] = updatedValue.trim();
      localStorage.setItem("data", JSON.stringify(data));

      listItem.childNodes[0].nodeValue = updatedValue + " ";
    }
  }
}
