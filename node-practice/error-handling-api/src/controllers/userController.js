const { readUsers, writeUsers } = require("../models/userModel");
const asyncHandler = require("../utils/asyncHandler");

// GET all users
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await readUsers();
  res.json(users);
});

// GET by ID
exports.getUserById = asyncHandler(async (req, res) => {
  const users = await readUsers();
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json(user);
});

// CREATE
exports.createUser = asyncHandler(async (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    res.status(400);
    throw new Error("Name and role required");
  }

  const users = await readUsers();

  const newUser = {
    id: Date.now(),
    name,
    role,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  await writeUsers(users);

  res.status(201).json(newUser);
});