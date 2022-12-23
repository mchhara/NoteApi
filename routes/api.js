const express = require('express');
const router = express.Router();

const noteActons = require('../controllers/api/notes');

router.get('/', noteActons.saveNote);


module.exports = router;