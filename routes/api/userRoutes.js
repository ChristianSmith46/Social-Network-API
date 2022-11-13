const { getUsers, getSingleUser, createUser, updateUser } = require('../../controllers/userController');

const router = require('express').Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser);

module.exports = router;