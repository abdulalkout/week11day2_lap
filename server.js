const express = require("express");
const app = express();
const magic = require("./models/magic");

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

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tips = (req.params.tipPercentage / 100) * req.params.total;
  res.send(`<h3>your tip should be <strong> ${tips} </strong> </h3>`);
});

app.get("/magic/:question", (req, res) => {
  const randomAnswer = Math.floor(Math.random() * magic.length);
  const questionRes = `<h3>${req.params.question}</h3> </br> <h5>${magic[randomAnswer]}</h5>`;
  res.send(questionRes);
});

app.listen("3002", (req, res) => {
  console.log("app is running on port 3002");
});
