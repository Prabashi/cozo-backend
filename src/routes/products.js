const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/allproducts', (req, res) => {
    Product.find({}, function(err, data){
        console.log(">>>> " + data );
        res.send(data);
    });
});

router.post('/add', (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });

    console.log({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });

    product.save().then(() => {
        console.log('meow');
        res.json(product);
    });
});

router.get('/oneproduct', (req, res) => {
    Product.findOne({title: req.body.title,
        description: req.body.description,
        price: req.body.price}, function(err, data){
        console.log( data );

        if (data) {
            res.send({status: "success", data: data});
        } else {
            res.send({status: "failure", data: data});
        }
    });   
});

module.exports = router;