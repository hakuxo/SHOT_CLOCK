const router = require("express").Router();
const { User } = require("../../models");


// Login page route
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    const validPass = await userData.checkPassword(req.body.password);

    if (!validPass) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout page route
router.post("/logout", (req, res) => {
  // Implement logout logic, for example by destroying the session
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
