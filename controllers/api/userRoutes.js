const router = require("express").Router();
const { User } = require("../../models");

router.get("/login", (req, res) => {
  // if (req.session.user) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("login");
});

// Login page route
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
    }
    const validPass = await userData.checkPassword(req.body.password);

    if (!validPass) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
    }

    req.session.save(() => {
      // req.session.user_id = userData.id;
      // req.session.logged_in = true;

      res.json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Logout page route
router.get("/logout", (req, res) => {
  // Implement logout logic, for example by destroying the session
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
