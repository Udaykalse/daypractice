const express = require("express");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

const PORT = 5001;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port :- ${PORT}`);
});
// https://chatgpt.com/c/697847c0-5ef0-8324-94f6-c0b9407a4132