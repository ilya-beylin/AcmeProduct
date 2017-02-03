/* Provide middleware */
const express = require('express');
const router = express.Router();

const products = require('./product');

router.get('/', function(req, res, next){
  res.render('product', {title: 'Products', products: products.getProducts()});
});

router.delete('/:id', function(req, res, next){
  products.deleteProduct(req.params.id * 1);
  res.redirect('/');
});

//this should be a get for seeing the edit form
router.patch('/:id', function(req, res, next){
  res.render('productEdit', {title: 'Edit Product', id: req.params.id * 1, product: products.getProduct(req.params.id * 1)});
});

//this should be a patch to /products/:id
router.post('/edit-product/:id', function(req, res, next){
  var product = req.body.name;
  var id = req.params.id * 1;
  products.editProduct(id, product);
  res.redirect('/');
});

//this should just be a post to /products
router.post('/new_product', function(req, res) {
  var product = req.body.product;
  products.addProduct(product);
  res.redirect('/');
});


module.exports = router;
