const appController = require('../controllers/appController');
const express = require('express');
const router = express.Router();

router.get('/', appController.get);

module.exports = router;
