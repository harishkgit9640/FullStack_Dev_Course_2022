// alert("You want to write the value of a:");
let a = prompt("Enter The value of a: ");
let write = confirm("Do you want to write the value of a:");
alert(typeof a)
if (write) {
    document.write("he value of a:" + a)
} else {
    alert("You have to click on Ok button for view the result of a")
}