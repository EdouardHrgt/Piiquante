const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');

router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.sauceLikes);

module.exports = router;
