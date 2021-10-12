const express = require("express");
const app = express();
const connection = require("./database/mysql");
const Question = require("./models/Question");
const Reply = require("./models/Reply");

// Database connection
connection
  .authenticate()
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Substitui bodyParser

// Routes
app.get("/", (req, res) => {
  Question.findAll({ raw: true, order: [["id", "DESC"]] }).then((questions) => {
    res.render("index", {
      questions: questions,
    });
  });
});

app.get("/Question", (req, res) => {
  res.render("Question");
});

app.post("/save", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  // res.send(`Form recieved! ${title} ${description}`);
  Question.create({
    title: title,
    description: description,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/question/:id", (req, res) => {
  let id = req.params.id;
  Question.findOne({
    where: { id: id },
  }).then((question) => {
    if (question != undefined) {
      res.render("question", {
        question: question,
      });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/answer", (req, res) => {
  let answerBody = req.body.answerBody
});

app.listen(3000, () => {
  console.log("Server running!");
});
