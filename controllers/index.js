const router =  require('express').Router();


router.get('/', (req, res) => {
    res.render("homepage");
});

router.get('/api/users/login', (req, res) => {
    // if (req.session.user){
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;