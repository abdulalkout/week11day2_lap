const express = require("express");
const app = express();
const magic = require("./models/magic");

app.get("/", (req, res) => {
  const homeRes = `<h1> this is the home page </h1> </br> <a href="/greeting">go to greating</a>  </br> <a href="/greeting/abdul">greating Abdul</a> </br> <a href="/tip/100/20">Tip Cal</a> </br> <a href="/magic/am I gonna be a millionar">Magic Answer</a>`;
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
  res.send(
    `<h3>Total: ${req.params.total} and tip persent : ${req.params.tipPercentage}% your tip should be <strong> $${tips} </strong> </h3> </br> <a href="/">Home Page</a>`
  );
});

app.get("/magic/:question", (req, res) => {
  const randomAnswer = Math.floor(Math.random() * magic.length);
  const questionRes = `<h1>${req.params.question}</h1> </br> <h3>${magic[randomAnswer]}</h3> </br> <a href="/">Home Page</a>`;
  res.send(questionRes);
});

app.listen("3002", (req, res) => {
  console.log("app is running on port 3002");
});
