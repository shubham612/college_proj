const express = require('express');
const router = express.Router();
const cutomersController = require('../controllers/customer_controllers');

// router.get('/profile',cutomersController.profile);

router.get('/sign-up',cutomersController.signUp);

router.get('/sign-in',cutomersController.signIn);

router.post('/create',cutomersController.create);



module.exports = router;