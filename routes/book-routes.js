const bookCtrl = require('../controllers/book-controller')
const express = require('express');
const router = express.Router();

router.route('/:_id')
    .get(bookCtrl.book)

module.exports = router;