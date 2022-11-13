const { getUsers, getSingleUser, createUser, updateUser, addFriend, removeFriend, deleteUser } = require('../../controllers/userController');

const router = require('express').Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;