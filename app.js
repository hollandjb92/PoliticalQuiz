const express = require("express"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");


const quizRoutes = require("./controllers/quizRoutes");
const authRoutes = require("./controllers/authRoutes");



const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())
app.use(express.static(__dirname + "/public"));


//PASSPORT CONFIG GOES HERE

app.get("/", (req, res) => {
  res.render("index", )
})


app.use("/", [quizRoutes, authRoutes])



app.listen(PORT, console.log(`Server running on PORT ${PORT}`))