var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err,docs)=>{
    var productsChunks = [];
    var chunkSize = 3;
    for (var i = 0; i<docs.length; i += chunkSize){
      productsChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productsChunks });
  });

  router.get('/user/signup',(req,res,next)=>{
    res.render('user/signup', {csrfToken: req.csrfToken()});
  });
  
});
router.post('/user/signup', (req,res,next)=>{
  res.redirect('/');
});

module.exports = router;
