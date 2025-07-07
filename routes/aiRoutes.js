const express = require('express');
const router = express.Router();
const { suggestMeal } = require('../controllers/aiController');
const authMiddleware = require('../middleware/authMiddleware');

// Make sure `suggestMeal` is defined and is a function!
router.post('/suggest-meal', authMiddleware, suggestMeal);

module.exports = router;
