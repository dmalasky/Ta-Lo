const express = require('express');
const controller = require('../controllers/mainConstroller');
const router = express.Router();

//Routers
router.get('/test', controller.test );

module.exports = router;