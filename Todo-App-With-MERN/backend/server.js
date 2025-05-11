const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/routes/index.js");
const app = express();
const port = 4001;

app.use(express.urlencoded({ extended: true }));
// parse json
app.use(express.json());

app.use(cors("*"));
mongoose
  .connect("mongodb://localhost:27017/todo-app")
  .then(() => console.log("Connection with mongodb is successful"))
  .catch((err) => console.log("err", err));

app.use(router);
app.get("/", (req, res) => {
  res.status(200).send("Hello World! Server is Running");
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});