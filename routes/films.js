var express = require('express');

var router = express.Router();

var http = require('http');

router.get("/", function (req, res, next) {
    
    console.log("I think it's your films page");

    var options = {
        host: 'www.swapi.co',
        path: '/api/films/'
    };

    callback = function(response) {
        var data = '';

        //build data object
        response.on('data', function (chunk) {
            data += chunk;
        });

        //Build and render data
        response.on('end', function () {
            data = JSON.parse(data);
            console.log(data.results);
            res.render('films', {
                obj: data.results,
                header: "Star Wars Film Index"
            });
        });
        
}

    http.request(options, callback).end();



});

module.exports = router;