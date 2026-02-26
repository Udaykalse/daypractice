const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");
const notFound = require("./middlewares/notFound.middleware");

const app = express();

app.use(express.json());

/* ======================
   Logging Setup
====================== */

const logDir = path.join(__dirname, "../logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const accessLogStream = fs.createWriteStream(
  path.join(logDir, "access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

/* ======================
   Routes
====================== */

app.use("/api/auth", authRoutes);

/* ======================
   Middlewares
====================== */

app.use(notFound);
app.use(errorHandler);

module.exports = app;