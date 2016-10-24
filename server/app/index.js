'use strict'; 
var express = require('express');
var app = express();
var path = require('path');

var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(express.static('public'));

app.use(function (req, res) {
  res.sendFile(indexPath);
});

module.exports = app;
