const express = require('express');
const controller = require('../controllers/mainConstroller');
const router = express.Router();
 
//Router create_user
router.post('/createUser', controller.createUser);

//Router login
router.post('/login', controller.logIn);

module.exports = router;
