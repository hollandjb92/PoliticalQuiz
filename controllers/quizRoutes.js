const express = require("express"),
router = express.Router();
var db = require("../models");

let posts = [];

router.get("/api", function(req, res) {
  console.log('statusCode:', res.statusCode);
  res.send(res.body)

});

router.get("/api/posts", function(req, res) {
  console.log('statusCode:', res.statusCode);
  db.User.findAll({})
  .then(function(dbPost) {
    res.json(dbPost);
  });

});

router.post("/api/posts", function(req, res) {
  console.log('statusCode:', req.statusCode);
  console.log(req.body)
  posts.push({ score: req.body.totalScore })
  //res.send('Successfully posted to database')
  console.log(req.body);
  db.User.create({
    id: req.body.id,
    email:  null,
  userPassword:  null,
  scoreCJ:  null,
  scoreEcon:  null, 
  scoreHC:  null,
  scoreImm:  null,
  scoreEdu:  null, 
  scoreEnv:  null,
  totalScore:  req.body.totalScore,
  party:  null,
  preferredCandidate: null, 
  createdAt: null,
  updatedAt: null
})
    .then(function(dbPost) {
      res.json(dbPost);
    });

});

/*
localhost:3000/quiz1/quizOne

router.get("/quiz1/:quizNum", (req, res) => {
  var quizNum = req.params.quizNum

  switch(quiz) {
    case: "quizOne"
    res.render("quizOne")
    break;
    case: "quizTwo"
    res.render("quizTwo")
    break;
    default:
      res.render("quizOne")
  }
})
*/
router.get("/quiz1", (req, res) => {
  console.log("quiz1route")
  res.render("quizOne");
})

router.post("/quiz1", (req, res) => {
  console.log("quiz1route")
  res.render("quizOne");
})

router.get("/quiz2", (req, res) => {
  res.render("quizTwo")
})

router.get("/quiz3", (req, res) => {
  res.render("quizThree")
})

router.get("/quiz4", (req, res) => {
  res.render("quizFour")
})
 
router.get("/quiz5", (req, res) => {
  res.render("quizFive")
})

router.get("/quiz6", (req, res) => {
  res.render("quizSix")
})

router.get("/quiz7", (req, res) => {
  res.render("quizSeven")
})

router.get("/results", (req, res) => {
  res.render("results")
})





module.exports = router;