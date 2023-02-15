const express = require('express');
const bodyParser = require('body-parser');
const { Prediction } = require('../../models');
const path = require('path');
const sequelize = require('../config/connection');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine');

app.get('/', function (req, res) {
  res.render(); 
});

app.post('/prediction', async function (req, res) {
  try {
    const prediction = await Prediction.create({
      team: req.body.team,
      opposing_team: req.body.opposing_team,
      win: req.body.win,
      loss: req.body.loss,
      winnerScore: req.body.winnerScore,
      loserScore: req.body.loserScore,
    });
    res.send(prediction.toJSON());
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

const server = app.listen(3000, function () {
});

process.on('SIGINT', function () {
  sequelize.close();
  server.close(function () {
  });
});