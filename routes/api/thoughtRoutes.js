const { getThoughts, createThought, getSingleThought, updateThought, deleteThought, createReaction, removeReaction } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(removeReaction);

module.exports = router;