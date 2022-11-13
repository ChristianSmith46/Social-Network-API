const { getUsers, getSingleUser, createUser } = require('../../controllers/userController');

const router = require('express').Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;