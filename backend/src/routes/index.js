const { Router } = require("express");
const router = Router();

const routeUsers = require('./Users');
const routeProducts = require('./Products');

router.use('/', routeUsers);
router.use('/', routeProducts);

module.exports = router;