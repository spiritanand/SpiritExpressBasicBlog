// uses the "fs" for accessing the file system

const fs = require("fs");

// reading files
// it is async and non-blocking
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
	console.log(err);
  }
  console.log(data.toString());
});

// writing files
// if file exists => replaces content
// if files does not exist => creates file with the content(data)
fs.writeFile("./docs/blog2.txt", "Harry Potter", () => {
  console.log("Harry Potter blog written");
});

// directories
// creates a new directory if it does not exist, else throws error
if (!fs.existsSync("./assets"))
  fs.mkdir("./assets", (err) => {
	if (err) console.log(err);
	
	console.log("directory created");
  });
else
  fs.rmdir("./assets", (err) => {
	if (err) console.log(err``);
	console.log("directory removed");
  });

// deleting files
if (fs.existsSync("./docs/deleteMe.txt"))
  fs.unlink("./docs/deleteMe.txt", (err) => {
	if (err) console.log(err);
	
	console.log("file deleted");
  });

// to prove async nature of the methods
console.log("last line (but will be printed first)");