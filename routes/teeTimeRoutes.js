const express = require('express');
const router = express.Router();
const teeTimeController = require('../controllers/teeTimeController');

router.get('/', teeTimeController.getAllTeeTimes);
router.post('/', teeTimeController.createTeeTime);

module.exports = router;
