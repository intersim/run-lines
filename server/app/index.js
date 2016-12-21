const express = require('express');
const app = express();
const path = require('path');
const toc = require('../../data/plays/toc.json');

const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(express.static('public'));

toc.forEach(play => {
	app.get(`/api/plays/${play}`, (req, res, next) => {
		res.json(require(`../../data/plays/${play}.json`));
	});

	app.get(`/api/plays/${play}/characters`, (req, res, next) => {
		res.json(require(`../../data/characters/${play}-characters.json`));
	})
});

app.use(function (req, res) {
  res.sendFile(indexPath);
});

module.exports = app;
