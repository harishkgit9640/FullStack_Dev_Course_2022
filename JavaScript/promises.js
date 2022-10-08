let pro = new Promise((resolve, reject) => {
    console.log('this is an example of promise processing...');
    setTimeout(() => {
        console.log('this is an example of promise completed');
        resolve('okay')
        reject('err')
    }, 3000)
});
pro.then((val) => {
    console.log(val);
});
pro.catch((e) => {
    alert('this err', e)
})
