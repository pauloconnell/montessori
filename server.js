// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Parents contribute helpful video ideas",
  "Or parents can request videos to help with x y or z"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// send the default array of dreams to the webpage
app.get("/baby", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.sendFile(__dirname + "/views/baby.html");
});

// send the default array of dreams to the webpage
app.get("/pre1", (request, response) => {
  // express helps us take JS objects and send them as JSON
   response.sendFile(__dirname + "/views/pre1.html");
});
// send the default array of dreams to the webpage
app.get("/pre2", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.sendFile(__dirname + "/views/pre2.html");
});
// send the default array of dreams to the webpage
app.get("/kindergarten", (request, response) => {
  // express helps us take JS objects and send them as JSON
   response.sendFile(__dirname + "/views/kindergarten.html");
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
