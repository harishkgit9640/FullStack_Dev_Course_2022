// Primitive type  =  Data type 
// we have 7 Primitive Data type in javaSript We can recall in short form - nn ss bb u 

let num = 123;
let n = null;

let sy = Symbol("thank You!");
let name = "harish";

let bool = true;
let bigit = BigInt("345") + BigInt("05");

let u;

// console.log(num, n, sy, name, bool, bigit, u);

console.log(typeof(bigit));
console.log(typeof(u));


// nonerimitive type  =  Object
// object holds value form of Key : Value pair

let details = { 
    fullName : "harish Kuamr",
    age : 22,
    single : true,
    job : undefined
}
console.log(details);
