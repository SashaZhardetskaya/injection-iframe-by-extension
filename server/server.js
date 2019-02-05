const express = require('express');
const app = express();
const path = require('path');
const port = 9001;

app.use(function(req, res, next) {
  res.header("Content-Security-Policy", "frame-src 'self'; script-src 'self' https://apis.google.com;");
  // res.header("Content-Security-Policy", "frame-src 'self'");
  // res.set("Content-Security-Policy", "default-src 'self';");
  res.header("X-Frame-Options", "deny");
  return next();
});
app.use(express.static(path.join(__dirname, 'pages')));

app.listen(port);

app.post("/submit", function (req, res) {

  res.send("ok");
});

console.log(`Listening on port ${port}`);
