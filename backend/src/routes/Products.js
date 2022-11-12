const {Router} = require('express');
const router = Router();

const {getProducts} = require('../controllers/Products');
const {getProductsForAdmin} = require('../controllers/Products');
const {getProductForID} = require('../controllers/Products');
const {putNameProduct} = require('../controllers/Products');
const {putProductType} = require('../controllers/Products');
const {putPriceProduct} = require('../controllers/Products');
const {putRatingProduct} = require('../controllers/Products');
const {putDescriptionProduct} = require('../controllers/Products');
const {putImageProduct} = require('../controllers/Products');
const {postProduct} = require('../controllers/Products');
const {deleteProduct} = require('../controllers/Products');

router.get('/getProducts', getProducts);
router.get('/getProductsForAdm/:id', getProductsForAdmin);
router.get('/getProductsForID/:id', getProductForID);
router.put('/putNameProduct', putNameProduct);
router.put('/putProductType', putProductType);
router.put('/putPriceProduct', putPriceProduct);
router.put('/putRatingProduct', putRatingProduct);
router.put('/putDescriptionProduct', putDescriptionProduct);
router.put('/putImageProduct', putImageProduct);
router.post('/postProduct', postProduct);
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;