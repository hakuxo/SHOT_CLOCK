const router = require("express").Router();
// const fs = require('fs');

router.get("/", (req, res) => {
  // fs.readFile('./lib/db.json', (err,data) => {
  //   res.json(JSON.parse(data))
  //   console.log(data)
  // })

  if(!req.session){
     res.redirect('/login');
  } else {
   res.render("homepage");
  }

});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;


