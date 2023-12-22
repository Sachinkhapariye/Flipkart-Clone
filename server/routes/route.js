const express = require('express')
const {userSignup,userLogin} = require('../controller/userController')
const {getProducts,getProductById} = require('../controller/productController')
const {addPaymentGateway} = require('../controller/paymentController');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login',userLogin)
router.get('/products',getProducts)
router.get('/product/:id',getProductById)
router.post('/payment',addPaymentGateway);
module.exports = router;
