const { getThoughts, createThought, getSingleThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;