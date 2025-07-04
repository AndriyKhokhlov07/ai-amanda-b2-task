const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.post('/grouped-people', groupController.groupedPeople);

module.exports = router;



