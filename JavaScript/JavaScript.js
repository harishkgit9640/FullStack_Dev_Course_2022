
console.log('Im gonna tell you about fetch api ');
let res = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
res.then(val => console.log(val)).then((val2) => console.log(val2))
