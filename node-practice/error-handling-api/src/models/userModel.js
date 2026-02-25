const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "./../../data.json");

async function readUsers() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeUsers(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readUsers, writeUsers };
