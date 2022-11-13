const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('User Route');
});

module.exports = router;