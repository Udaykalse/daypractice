# Simple CRUD API (Node.js + Express - MVC)

A simple file-based CRUD API built using Node.js and Express following MVC architecture.

## 🚀 Features

- Get all users
- Get user by ID
- Create user
- Update user
- Delete user
- File-based storage (data.json)
- MVC structure

---

## 📁 Project Structure

```
simple-crud/
│
├── server.js
├── data.json
├── .gitignore
├── README.md
└── src/
    ├── routes/
    ├── controllers/
    └── models/
```

---

## 🛠 Installation

```bash
npm install
```

---

## ▶ Run Server

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Get All Users
GET `/users`

### Get User By ID
GET `/users/:id`

### Create User
POST `/users`

Body:
```json
{
  "name": "Uday",
  "role": "Support"
}
```

### Update User
PUT `/users/:id`

### Delete User
DELETE `/users/:id`

---

## 📚 Tech Stack

- Node.js
- Express
- File System (fs)
- MVC Architecture

---

## 👨‍💻 Author

Uday Kalse