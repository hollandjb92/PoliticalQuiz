const express = require("express"),
  router = express.Router();



router.get("/quiz1", (req, res) => {
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

router.get("/results", (req, res) => {
  res.render("results")
})




module.exports = router;