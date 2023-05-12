const fs = require("fs")

let index = 0;

function eventLoop(name) {
  console.log((
				index++
			  ) + " " + name);
}

setImmediate(function () {
  eventLoop("setImmediate");
});

setTimeout(function () {
  eventLoop("setTimeout");
}, 0);

// setInterval(function () {
//   test("setInterval");
// }, 0);

process.nextTick(function () {
  eventLoop("nextTick");
});

eventLoop("directCall");

fs.readFile("./docs/blog1.txt", () => {
  setTimeout(() => {
	console.log('timeout in fs');
  }, 0);
  setImmediate(() => {
	console.log('immediate in fs');
  });
});
