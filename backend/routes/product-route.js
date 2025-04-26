const express = require('express');

const router = express.Router();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require('../controllers/product-controller');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', addProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
