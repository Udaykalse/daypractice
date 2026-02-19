# React Todo App (TailwindCSS)

A clean and simple Todo List project built using **ReactJS + TailwindCSS** with an industry-style folder structure.

---

## 🚀 Live Demo (Vercel)

🔗 [https://daypractice.vercel.app/](https://daypractice.vercel.app/)

---

## ✨ Features

- Add Todo
- Edit Todo
- Delete Todo
- Mark Complete / Incomplete
- Filter Todos (All / Active / Completed)
- Clear Completed Todos
- Saves todos in **LocalStorage**
- Clean UI with TailwindCSS
- Dockerized using **Multi-Stage Build + Nginx**

---

## 🛠 Tech Stack

- ReactJS (Vite)
- TailwindCSS
- JavaScript (ES6+)
- LocalStorage
- Docker
- Nginx (for production container)

---

## 📂 Folder Structure

```bash
src/
│
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   └── TodoFilters.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── utils/
│   └── todoHelpers.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd react-todo-tailwind
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

Now open: [http://localhost:5173](http://localhost:5173)

---

## 🎨 TailwindCSS Setup

Tailwind is already configured in this project.

Main file: `src/index.css`

---

## 🐳 Docker Setup (Production Build)

This project is containerized using a multi-stage Docker build.

### 1️⃣ Build Docker Image

```bash
docker build -t react-todo-app .
```

### 2️⃣ Run Docker Container

```bash
docker run -d -p 3000:80 --name react-todo-container react-todo-app
```

### 3️⃣ Open in Browser

[http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Compose (Optional)

### Run with Docker Compose

```bash
docker compose up --build
```

### Stop Docker Compose

```bash
docker compose down
```

---

## 📝 Command Logging (Linux Practice)

While building this project, I also practiced Linux by saving commands in a `.txt` file for revision.

```bash
# Save history automatically
history > docker-commands.txt

# Or manually
nano commands.txt
```

---

## 📌 What I Learned

- Building React projects with clean folder structure
- Code optimization using hooks + helper functions
- Reusable components & clean UI with TailwindCSS
- Storing data in LocalStorage
- Dockerizing React app with Nginx production setup
- Running and managing containers using Linux commands