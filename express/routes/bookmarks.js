const express = require('express');
const router = express.Router();

const bookmMarksController = require('../controllers/bookmarks-controller');

router.post('/', bookmMarksController.create)

module.exports = router;