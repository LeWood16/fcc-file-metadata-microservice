'use strict';
var express = require('express');
var path = require('path');
var multer  = require('multer');
var upload = multer();
var app = express();





app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/', upload.single('file'), function (req, res) {
  res.json({"file size in bytes": req.file.size });
});





var server = app.listen(process.env.PORT || 3000, function() {
  console.log('app listening on port ' + process.env.PORT + '!');
});
module.exports = server;