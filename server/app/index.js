const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.use('/api', require('../api'));

app.use(function (req, res) {
  res.sendFile(indexPath);
});

module.exports = app;
