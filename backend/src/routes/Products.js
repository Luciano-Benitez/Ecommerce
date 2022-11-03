const {Router} = require('express');
const router = Router();

const {getProducts} = require('../controllers/Products');
const {getProductsForAdmin} = require('../controllers/Products');

router.get('/getProducts', getProducts);
router.get('/getProductsForAdm', getProductsForAdmin);

module.exports = router;