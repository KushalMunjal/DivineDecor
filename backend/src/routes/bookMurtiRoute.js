const express = require('express');
const { bookMurti } = require('../controllers/bookMurtiController');

const router = express.Router();

router.post('/bookMurti', bookMurti);

module.exports = router;
