const express = require("express");
const app = express();

const fs = require("fs");

const port = process.env.PORT || 5000;

const indexFile = fs.readFileSync("index.html", "utf-8");

app.get("/", (req, res) => {
  res.send(indexFile);
});

app.listen(port, () => {
  console.log(`Server is Listening at port ${port}`);
});
