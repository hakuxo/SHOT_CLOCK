const router = require("express").Router();

router.get("/:team", (req, res) => {
  res.render("schedule", req.params);
});


module.exports = router;
