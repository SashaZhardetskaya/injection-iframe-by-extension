const express = require('express');
const app = express();
const path = require('path');
const port = 9001;

app.use(express.static(path.join(__dirname, 'pages')));
app.use(function(req, res, next) {
  // res.header("Content-Security-Policy", "script-src 'self' https://apis.google.com");
  res.header("Content-Security-Policy", "frame-src 'self'");
  res.header("X-Frame-Options", "deny");
  return next();
});

app.listen(port);

app.post("/submit", function (req, res) {

  res.send("ok");
});

console.log(`Listening on port ${port}`);
