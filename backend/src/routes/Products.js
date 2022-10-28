const {Router} = require('express');
const router = Router();

const {getProducts} = require('../controllers/Products');

router.get('/getProducts', getProducts);

module.exports = router;