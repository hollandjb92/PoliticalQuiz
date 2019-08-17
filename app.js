const express = require("express"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");



const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(__dirname + "/public"));


//PASSPORT CONFIG GOES HERE

app.get("/", (req, res) => {
  res.send("YAY IT WORKS");
})



app.listen(PORT, console.log(`Server running on PORT ${PORT}`))