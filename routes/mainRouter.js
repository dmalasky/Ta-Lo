const express = require('express');
const controller = require('../controllers/mainConstroller');
const router = express.Router();

//Routers
router.get('/test', controller.test );

//Router create_user
router.post('/create_user', controller.createUser);

//Router login
router.post('')
module.exports = router;