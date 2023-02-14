const router = require("express").Router();
const { User } = require("../../models");


// Login page route
router.post("/login", async (req, res) => {
  try {
    console.log(req.body.email)
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    const validPass = userData.checkPassword(req.body.password);

    if (!validPass) {

      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    // const loginData = { user_id: userData.id, logged_in: true };
    // await Login.create(loginData);
    // console.log('hello')
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

  router.post('/', async(req, res) => {
    // console.log(req.body)
  const { username, email, password } = req.body;


  const userData = {
      username,
      email,
      password
  };

  const afterUser = await User.create(userData)
  if(afterUser) {
    res.status(201).json(userData);
    // res.redirect('/')
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
