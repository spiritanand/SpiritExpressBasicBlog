let bar;

// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) {
  // the callback is called before `someAsyncApiCall` completes.
  // callback(); // won't work as the callback is called sync and bar is not defined yet
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  
  process.nextTick(callback);
  setImmediate(callback);
}

// someAsyncApiCall(() => {
//   console.log("bar", bar);
// });

console.log("user code before");

process.nextTick(() => {
  console.log("inside next tick");
//   this will be run only after every use written code is executed
});

setImmediate(() => {
  console.log("in setImmediate");
});

console.log("user code after");

bar = 1;