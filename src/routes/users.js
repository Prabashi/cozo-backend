const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    console.log({
        name: req.body.name,
        email: req.body.email,
        ff: user.createdAt
    });

    user.save().then(() => {
        console.log('meow');
        res.json(user);
    });
        
});

router.get('/', (req, res) => {
    User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
      })
});

module.exports = router;