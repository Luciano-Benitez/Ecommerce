const {Router} = require('express');
const router = Router();

const {postPayment} = require('../controllers/Payments');

router.post('/Payment', postPayment);

module.exports = router;