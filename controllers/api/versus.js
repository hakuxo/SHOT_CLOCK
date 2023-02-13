const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("schedule");
});


module.exports = router;
