var express = require('express');

var router = express.Router();

var http = require('http');

router.get("/", function (req, res, next) {

    console.log("I think it's index");

    res.render('index', {
        Header: "Welcome to the Star Wars Index!"
    });

});

module.exports = router;