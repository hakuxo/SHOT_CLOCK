const router =  require('express').Router();


// Login page route
router.get('/login', (req, res) => {
  res.render('login');
});

// Logout page route
// router.get('/logout', (req, res) => {
  // Implement logout logic, for example by destroying the session
//   req.session.destroy((err) => {
//     res.redirect('/');
//   });
// });

module.exports = router;
