const {Router} = require('express');
const router = Router();

const {postUsers} = require('../controllers/Users');
const {getUsers} = require('../controllers/Users');
const {confirmAccount} = require('../controllers/Users');
const {loginUsers} = require('../controllers/Users');
const {loginUserGoogle} = require('../controllers/Users');

router.post('/postUser', postUsers);
router.get('/getUser', getUsers);
router.get('/confirm/:token', confirmAccount);
router.post('/login', loginUsers);
router.post('/loginUserGoogle', loginUserGoogle);

module.exports = router;