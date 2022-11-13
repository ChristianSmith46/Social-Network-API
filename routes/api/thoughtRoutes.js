const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('Thought Route');
});

module.exports = router;