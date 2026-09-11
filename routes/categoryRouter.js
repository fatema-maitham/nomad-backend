const express = require('express');

const categoryCtrl = require('../controllers/categoryCtrl');

const router = express.Router();

router.get('/', categoryCtrl.getCategories);
router.post('/', categoryCtrl.createCategory);
router.get('/:categoryId', categoryCtrl.showCategory);
router.put('/:categoryId', categoryCtrl.updateCategory);
router.delete('/:categoryId', categoryCtrl.deleteCategory);

module.exports = router;