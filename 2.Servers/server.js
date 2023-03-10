const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  // implementing basic routing
  let path = "./views/";
  switch (req.url) {
	case "/": {
	  path += "index.html";
	  res.statusCode = 200;
	  break;
	}
	case "/about": {
	  path += "about.html";
	  res.statusCode = 200;
	  break;
	}
	case "/about-me": {
	  // we will redirect the page to about instead of showing 404 page
	  res.statusCode = 301;
	  res.setHeader("Location", "/about");
	  res.end();
	  break;
	}
	default: {
	  path += "/404.html";
	  res.statusCode = 404;
	}
  }

//  creating the response (res) object

//   set header content type
  res.setHeader("Content-type", "text/html");
  
  // res.write("<h1>Hey brother!</h1>");
  // res.write("<h1>Hey sister!</h1>");
  
  // send html file (as response)
  fs.readFile(path, (err, data) => {
	if (err) {
	  console.log(err);
	  res.end();
	  return;
	}
	
	// res.write(data);
	// res.end();
	console.log("inside readFile");
	res.end(data);
  });
  
  console.log("inside create server");
});

server.listen(3000, "localhost", () => {
  console.log("listening on 3000");
});