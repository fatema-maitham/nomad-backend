const express = require('express');

const productCtrl = require('../controllers/productCtrl');

const router = express.Router();

router.get('/', productCtrl.getProducts);
router.post('/', productCtrl.createProduct);
router.get('/:productId', productCtrl.showProduct);
router.put('/:productId', productCtrl.updateProduct);
router.delete('/:productId', productCtrl.deleteProduct);

module.exports = router;