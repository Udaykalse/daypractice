const fs = require("fs");
const path = require("path");

console.log("UserModel Starts....");

const filePath = path.join(__dirname, "./../../data.json");

function readUsers() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeUsers(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log("UserModel Ends....");

module.exports = {
  readUsers,
  writeUsers,
};
