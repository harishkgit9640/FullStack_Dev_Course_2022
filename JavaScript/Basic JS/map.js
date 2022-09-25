import { sData, teacherData } from "./stdData.js";
// let arr = [1, 3, 4, 5, 6, 7, [10, 29, 49, 59]];
console.log(teacherData[0].fname);
sData.map((val, index, arr) => {
    console.log(`${val.fname} ${val.lname}`);
    // console.log(index);
});