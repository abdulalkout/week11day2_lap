const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const homeRes = `<h1> this is the home page </h1> </br> <a href="/greeting">go to greating</a>`;
  res.send(homeRes);
});

app.get("/greeting", (req, res) => {
  res.send(`<h3>Hello Stranger</h3> </br> <a href="/">Home Page</a>`);
});

app.get("/greeting/:name", (req, res) => {
  const greatingWithName = `<h3>Hello ${req.params.name}, How r u today?</h3> </br> <a href="/">Home Page</a>`;
  res.send(greatingWithName);
});

app.listen("3002", (req, res) => {
  console.log("app is running on port 3002");
});
