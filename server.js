const express = require("express");
const routes = require("./controllers/index.js");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");
// Makes express use the routes
app.use(express.static('layouts'))
app.use(routes);

app.listen(PORT, () => {
    console.log("It is working")
});