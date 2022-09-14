// To Do List JavaScript

let inpNewTask = $('#inpNewTask');
let ulTask = $('#ulTask');
let addBtn = $('#addTask');
let sortBtn = $('#sortTask');
let resetBtn = $('#restTask');
let delBtn = $('#clearTask');


function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item list-group-item-primary',
        text: inpNewTask.val()
    });
    listItem.click((event) => {
        listItem.toggleClass('done');
    });
    ulTask.append(listItem)
    inpNewTask.val('');
}

function clearDone() {
    inpNewTask.val('')
}

function sortTask() {
    inpNewTask.val('sorted')

}

function delTask() {
    inpNewTask.val('deleted')
}


addBtn.click(addItem);
resetBtn.click(clearDone);
sortBtn.click(sortTask);
delBtn.click(delTask);

