// Scope in js

// let x = 5;
// function test() {
//     const y = 10;
//     console.log(y)
//     console.log(x)
// }
// test();
// // console.log(y)  Error as it is a local variable/functional scope
// console.log(x)// Is a global scope variable.




// let score = 50;
// function updaterScore() {
//     let score = 100;
//     console.log(score)
// }
// console.log(score);
// updaterScore();
// updaterScore();
// console.log(score);


let points = 0;
function playGame() {
    let points = 50;
    points = points + 10;
    console.log(points);
}
console.log(points)
playGame()
playGame()