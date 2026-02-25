require("dotenv").config();
const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const notFound = require("./src/middleware/notFoundMiddleware");
const errorHandler = require("./src/middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});