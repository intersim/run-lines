'use strict'; 
const express = require('express');
const app = express();
const path = require('path');
const toc = require('../../data/toc.json');

const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(express.static('public'));

app.all('/', function (req, res) {
  res.sendFile(indexPath);
});

toc.forEach(play => {
	app.get(`/api/${play}`, (req, res, next) => res.json(require(`../../data/${play}.json`)));
});

module.exports = app;
