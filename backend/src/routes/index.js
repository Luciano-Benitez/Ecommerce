const { Router } = require("express");
const router = Router();

const routeUsers = require('./Users');
const routeProducts = require('./Products');
const routePayments = require('./payments');

router.use('/', routeUsers);
router.use('/', routeProducts);
router.use('/', routePayments);

module.exports = router;