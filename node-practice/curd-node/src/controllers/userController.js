const { readUsers, writeUsers } = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  const users = readUsers();
  console.log("getAllUsers........");
  res.json(users);
};

exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log("getUserById............");
  res.json(user);
};

exports.createUser = (req, res) => {
  const users = readUsers();
  if (!req.body.name || !req.body.role) {
    return res.status(400).json({ message: "Name and role required" });
  }
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    role: req.body.role,
    createdAt: new Date(),
  };
  users.push(newUser);
  writeUsers(users);
  console.log("createUser............");

  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const users = readUsers();
  const index = users.findIndex((u) => u.id === Number(req.params.id));
  if (index == -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users[index] = {
    ...users[index],
    name: req.body.name,
    role: req.body.role,
  };

  writeUsers(users);
  res.json(users[index]);
};

exports.deleteUser = (req, res) => {
  const users = readUsers();
  const filteredUsers = users.filter((u) => u.id != Number(req.params.id));
  if (users.length === filteredUsers.length) {
    return res.status(404).json({ message: "User not found" });
  }

  writeUsers(filteredUsers);
  res.json({ message: "Successfully deleted user" });
};
