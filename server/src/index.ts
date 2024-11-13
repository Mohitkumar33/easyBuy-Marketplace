import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world from server</h1>");
});

app.listen(8000, () => {
  console.log("This app is running on localhost 8000");
});
