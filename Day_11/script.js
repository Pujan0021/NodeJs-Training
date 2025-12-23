const fs = require("fs");
// const path = require("path");
// const fileName = "file.txt";
// const filePath = path.join(__dirname, fileName);

// console.log(__dirname);



// fs.promises.writeFile(filePath, "Hello Bca", "utf-8",).then((data) => {
//     console.log("SuccessFully Writing");

// }).catch((err) => console.log(err.messsage, "Error writing Files"));


fs.promises.writeFile("./Bca.txt", "Hello Bca", "utf-8",).then(() => {
    console.log("SuccessFully Writing");

}).catch((err) => console.log(err.messsage, "Error writing Files"));


// fs.promises.readFile(filePath, "Hello Bca", "utf-8",).then((data) => {
//     console.log("SuccessFully Writing");

// }).catch((err) => console.log(err.messsage, "Error writing Files"));
