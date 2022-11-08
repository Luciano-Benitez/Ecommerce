const {Router} = require('express');
const router = Router();

const {getProducts} = require('../controllers/Products');
const {getProductsForAdmin} = require('../controllers/Products');
const {getProductForID} = require('../controllers/Products');

router.get('/getProducts', getProducts);
router.get('/getProductsForAdm/:id', getProductsForAdmin);
router.get('/getProductsForID/:id', getProductForID);

module.exports = router;