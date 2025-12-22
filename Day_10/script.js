const fs = require("fs");
const path = require("path");
const fileName = "myFile.txt";
let filepath = path.join(__dirname, fileName);
// fs.writeFile(filepath, "Hello BCA 2081.", "utf-8", () => {
//     console.log("File Writing Finished");
// })
// fs.appendFile(filepath, "\nFrom Nepathya, College", "utf-8", () => {
//     console.log("File Appended Finished");
// })
const writeFile = async () => {
    await fs.promises.writeFile(filepath, "Hello BCA 2081.", "utf-8")
    console.log("File Writing Finished");

}
writeFile()
const appendFile = async () => {
    await fs.promises.appendFile(filepath, "\nFrom Nepathya, College", "utf-8");
    console.log("File Appended Finished");
}
appendFile();
// const deleteFile = async () => {
//     await fs.promises.unlink(filepath);
//     console.log("File deletion Finished");
// }
// deleteFile();

