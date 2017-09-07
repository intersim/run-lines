const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { renderToString } = require('react-dom/server');
const ClientApp = require('../../browser/app');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public', {
  maxAge: 86400000 // one day in milliseconds
}));

app.use('/api', require('../api'));

app.use(function (req, res) {
  res.send(`
  	<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Home</title>
		  <script src="https://use.fontawesome.com/00a583e84c.js"></script>
		  <link href="https://unpkg.com/basscss@7.1.1/css/basscss.min.css" rel="stylesheet">
		  <link href="style.css" rel="stylesheet">
		</head>
		<body>
		  <div id="app" class="flex flex-justify-center">${renderToString(<ClientApp />)}</div>
		  <script src="/bundle.js"></script>
		</body>
		</html>
  `);
});

module.exports = app;