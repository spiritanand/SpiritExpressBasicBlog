const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// setup express app
const app = express();

// connect to MongoDB
const dbURI = `mongodb+srv://spirtinnovates:PKGEReKWKn6ypbDM@learnnode.ftd43i2.mongodb.net/NetNinjaBlog?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
		.then(res => {
		  console.log("connected to db");
		  // we should listen for requests only once the connection has been made to
		  // the DB
		  app.listen(3000);
		})
		.catch(err => console.log(err));

// register view engine
app.set("view engine", "ejs");
// app.set("views", "<folder-name-where-views-are-stored>")

// using 3rd party middleware for logging
app.use(morgan("dev"));

// middleware for accessing static files
app.use(express.static("public"));

// middleware to get form data
app.use(express.urlencoded({extended: true}));

// now we will see how to serve a whole view
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res, next) => {
  res.render("about", {title: "About"});
});

// app.delete("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
// 	  .then((result) => {
// 		console.log(result);
// 		res.json({redirect:"/"})
// 	  })
// 	  .catch(err => console.log(err));
//   ;
// });

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404)
	 .render("404", {title: "404"});
});