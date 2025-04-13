{
var getList = document.getElementById('list');
var getInput = document.getElementById('todo');
function addtodo() {
    if(getInput.value === ''){
    alert('Fill the field')
    }else{
    getList.innerHTML += `<li class = 'list-1'> ${getInput.value} <button class = 'btn-3' onclick = 'this.parentNode.remove()'>Delete</button> <button class = 'btn-4' onclick= 'editItem(this)'> Edit </button> </li>`;
    getInput.value = '';
}}
function del() {
    getList.innerHTML = ''
}
function editItem(e){
    var xyz = prompt('enter the value',e.parentNode.firstChild.textContent )
    e.parentNode.firstChild.textContent = xyz 
}
}


