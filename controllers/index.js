const router =  require('express').Router();


router.get('/', (req, res) => {
    res.render("homepage");
});


const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;