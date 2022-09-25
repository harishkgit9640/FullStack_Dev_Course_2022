import { sData, teacherData } from "./stdData.js";
// let arr = [1, 3, 4, 5, 6, 7, [10, 29, 49, 59]];

const wrapper = document.querySelector('.wrapper');
sData.map((val, index, arr) => {
    let li = document.createElement('li')
    li.innerHTML = `${val.fname} ${val.lname}`;
    wrapper.append(li);
    // console.log(index);
});