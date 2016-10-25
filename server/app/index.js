'use strict'; 
const express = require('express');
const app = express();
const path = require('path');
const TOC = require('../../data/toc.json');

const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(express.static('public'));

app.all('/', function (req, res) {
  res.sendFile(indexPath);
});

toc.forEach(title => {
	app.get(`/$title`, (req, res, next) => res.json(require(`../../data/${title}.json`)));
});

module.exports = app;
