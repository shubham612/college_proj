const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/customers',require('./customers'));

// For any further routes,access from here
// Syntax: router.use('/routerName',require('/routerFile'));
console.log('router loaded');



module.exports = router;