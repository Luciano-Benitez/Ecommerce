const {Router} = require('express');
const router = Router();

const {postUsers} = require('../controllers/Users');
const {getUsers} = require('../controllers/Users');
const {confirmAccount} = require('../controllers/Users');
const {loginUsers} = require('../controllers/Users');
const {loginUserGoogle} = require('../controllers/Users');
const {forgotPassword} = require('../controllers/Users');
const {resetPassword} = require('../controllers/Users');
const {postAdmin} = require('../controllers/Users');
const {loginAdmin} = require('../controllers/Users');
const {changeProfile} = require('../controllers/Users');
const {ChangeNameAdm} = require('../controllers/Users');
const {changePasswordAdm} = require('../controllers/Users');

router.get('/getUser', getUsers);
router.post('/postUser', postUsers);
router.post('/login', loginUsers);
router.get('/confirm/:token', confirmAccount);
router.post('/loginUserGoogle', loginUserGoogle);
router.get('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.post('/postAdmin', postAdmin);
router.post('/loginAdmin', loginAdmin);
router.put('/changeProfile', changeProfile);
router.put('/changeNameAdm', ChangeNameAdm);
router.put('/changePasswordAdm', changePasswordAdm);


module.exports = router;