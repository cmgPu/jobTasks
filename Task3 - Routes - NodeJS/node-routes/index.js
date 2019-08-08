const express = require("express");
const app = express();

//ROUTES
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about-us", function(req, res) {
  res.sendFile(__dirname + "/public/about_us.html");
});

app.get("*", function(req, res) {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

//Start server on port 3000 or on enviroment PORT variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
