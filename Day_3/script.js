//async JS
// setTimeout(() => {
//     console.log("Hello")
// }, 300)
// console.log("Hi");



// let num = 9;
// setTimeout(() => {
//     num = 20
// }, 10)
// setTimeout(() => {
//     console.log("A:", num);
// }, 0)

// console.log("B:", num)




// console.log("Step 1");
// setTimeout(() => {
//     console.log("Step 2")
// }, 0)
// setTimeout(() => {
//     console.log("Step 3");
// }, 500)

// setTimeout(() => {

//     console.log("Step 4");
// }, 0)
// console.log("A");
// setTimeout(() => {
//     console.log("B")
// }, 0)
// setTimeout(() => {
//     console.log("C");
// }, 0)

// setTimeout(() => {

//     console.log("D");
// }, 50);

//callBack in js
const greet = (name, callback) => {
    console.log("Hello " + name);
    callback();
}
const askName = () => {
    console.log("What is Your")
}

greet("Pujan", askName);



