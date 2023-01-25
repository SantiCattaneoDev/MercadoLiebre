// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search);

/*** LOGIN ***/
router.get('/login', mainController.login); 

/*** REGISTER ***/
router.get('/register', mainController.register)

/*** PRODUCT CART ***/
router.get('/product-cart', mainController.cart);

module.exports = router;
