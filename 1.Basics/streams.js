const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", chunk => {
  console.log("-- New Chunk --");
  console.log(chunk);
  writeStream.write("\nNew Chunk\n");
  writeStream.write(chunk);
});

// piping, better way to write from a read stream and write it into write stream.
readStream.pipe(writeStream);

console.log("async");