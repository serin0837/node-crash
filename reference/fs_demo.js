const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder create");
// });

//Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world",
  (err) => {
    if (err) throw err;
    console.log("file written to ");
    //file append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "love love ",
      (err) => {
        if (err) throw err;
        console.log("file written to ");
      }
    );
  }
);
