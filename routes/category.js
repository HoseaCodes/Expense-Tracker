const router = require('express').Router();
const categoryCtrl = require('../controllers/category');

router.route('/')
    .get(categoryCtrl.getCategories)
    .post(categoryCtrl.createCategory)

router.route('/:id')
    .delete(categoryCtrl.deleteCategory)
    .put(categoryCtrl.updateCategory)

module.exports = router