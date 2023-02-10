const express = require("express");
const routes = require("./controllers/index.js");

const app = express();
const PORT = process.env.PORT || 3001;

// Makes express use the routes
app.use(routes);


app.listen(PORT, () => {
    console.log("It is working")
});