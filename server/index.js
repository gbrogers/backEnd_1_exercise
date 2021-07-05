const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());

//array of friends call friendsArr

app.get("/api/users", (req, res) => {
  //where is URL found?
  const friendsArr = ["Cece", "Luna", "Mabel", "Zoey"];
  res.status(200).send(friendsArr);
});

app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
});

// app.get("/weather/:temperature", (req, res) => {
//   const { temperature } = req.params;
//   const phrase = `<h3>It was ${temperature} today</h3>`;
//   res.status(200).send(phrase);
// });

app.listen(4000, () => {
  console.log("You are in port 4000");
});
