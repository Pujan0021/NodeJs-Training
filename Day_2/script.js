// Scope in js

let x = 5;
function test() {
    const y = 10;
    console.log(y)
    console.log(x)
}
// console.log(y)  Error as it is a local variable/functional scope
console.log(x)// Is a global scope variable.