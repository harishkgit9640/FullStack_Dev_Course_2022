// let pro = new Promise((resolve, reject) => {
//     console.log('this is an example of promise processing...');
//     setTimeout(() => {
//         console.log('this is an example of promise completed');
//         resolve('okay')
//         reject('err')
//     }, 3000)
// });
// pro.then((val) => {
//     console.log(val);
// });
// pro.catch((e) => {
//     alert('this err', e)
// })

const box = document.getElementById('box');

async function Parent() {

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello Im first promise ');
        }, 2000);
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello Im second promise ');
        }, 3000);
    });

    console.log("promise 1st is processing please wait...");
    let pro1 = await p1;
    console.log("promise 1st is Done :" + pro1);

    console.log("promise 2st is processing please wait...");
    let pro2 = await p2;
    console.log("promise 2st is Done :" + pro2);
    return [pro1, pro2];
}

let result = Parent();
result.then((val) => {
    console.log(val);
})

console.log(result);