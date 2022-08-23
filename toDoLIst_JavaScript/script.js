// To Do List JavaScript

let inpNewTask = $('#inpNewTask');
let ulTask = $('#ulTask');
let addTask = $('#addTask');
let sortTask = $('#sortTask');
let resetTask = $('#resetTask');
let clearTask = $('#clearTask');

addTask.click(() => {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    ulTask.append(listItem)
    inpNewTask.val('')
});

resetTask.click(() => {

});
