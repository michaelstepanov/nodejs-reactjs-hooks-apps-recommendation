const express = require('express');
const router = express.Router();
const categories = require('../data/categories');

router.get('/', async (req, res) => {
  return res.json(categories);
});

module.exports = router;
