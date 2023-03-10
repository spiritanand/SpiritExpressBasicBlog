const express = require("express");
const morgan = require("morgan");

// setup express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "<folder-name-where-views-are-stored>")

// listen for requests
app.listen(3000);


// this is how we return (normal) html pages in using express

// routing

// app.get("/", (req, res) => {
// res.send("<p>Inside express app</p>");
//   res.sendFile("./views/index.html", {root: __dirname});
// });

// app.get("/about", (req, res) => {
//   // res.send("<h1>About Page</h1>");
//   res.sendFile("./views/about.html", {root: __dirname});
// });

// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
// this needs to be at the bottom of our code. otherwise if express reaches this then
// this will be the response sent to the browser. At the bottom it works like a catch-all
// app.use((req, res) => {
//   res.status(404)
// 	 .sendFile("./views/404.html", {root: __dirname});
// });

// using 3rd party middleware for logging
app.use(morgan("dev"));

// middleware for accessing static files
app.use(express.static("public"));

// now we will see how to serve a whole view
app.get("/", (req, res) => {
  res.render("index", {title: "Home"});
});
app.get("/about", (req, res, next) => {
  res.render("about", {title: "About"});
});
app.get("/blogs/create", (req, res) => {
  res.render("create", {title: "Create"});
});
app.use((req, res) => {
  res.status(404)
	 .render("404", {title: "404"});
});