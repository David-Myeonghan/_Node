const fs = require("fs");
// const book = {
// 	title: "Harry Potter",
// 	author: "JKR"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-JSON.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-JSON.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync("1-JSON.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "David";
user.age = 28;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-JSON.json", userJSON);

console.log(user);
