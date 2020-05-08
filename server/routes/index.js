const express = require('express');
const router = express.Router();

router.use('/apps', require('./apps'));
router.use('/categories', require('./categories'));

module.exports = router;
