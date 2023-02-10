const router =  require('express').Router();

router.get('/', (req, res) => {
    res.json({msg: "Hi"});
});

module.exports = router;