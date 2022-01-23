const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopcoco");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.set("debug", true);

app.listen(port, () => {
  console.log(`Connected on localhost ${port}`);
});
