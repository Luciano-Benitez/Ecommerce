const {Router} = require('express');
const router = Router();

const {postUsers} = require('../controllers/Users');
const {getUsers} = require('../controllers/Users');
const {confirmAccount} = require('../controllers/Users');
const {loginUsers} = require('../controllers/Users');
const {loginUserGoogle} = require('../controllers/Users');
const {forgotPassword} = require('../controllers/Users');
const {resetPassword} = require('../controllers/Users');

router.post('/postUser', postUsers);
router.get('/getUser', getUsers);
router.get('/confirm/:token', confirmAccount);
router.post('/login', loginUsers);
router.post('/loginUserGoogle', loginUserGoogle);
router.get('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);

module.exports = router;