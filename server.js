const express = require("express");
const session = require('express-session');
const routes = require("./controllers/index.js");
const exphbs = require("express-handlebars");
const models = require("./models");
const db = require("./config/connection");
const sequelize = require("./config/connection");
const { sync } = require("./models/Prediction.js");
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

const sess = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    sameSite: true,
  },
  resave: false,
  saveUninitialized: true,
};

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

// Makes express use the routes
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session(sess));
app.use(routes);


sequelize.sync({force: false}).then (() => {
  app.listen(PORT, () => {

  });
})