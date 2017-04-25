var express = require('express');

var router = express.Router();

var http = require('http');


router.get("/", function (req, res, next) {
    
    console.log("I think it's your charachters page");

    var options = {
        host: 'www.swapi.co',
        path: '/api/people/'
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
            //console.log(data.results);
            res.render('characters', {
                obj: data.results,
                header: "Star Wars Character Index"
            });
        });   
    }

    http.request(options, callback).end();

    var options2 = {
            host: 'www.swapi.co',
            path: '/api/films/'
    };

    callback2 = function(response) {
        var data = '';

        //append data
        response.on('data', function (chunk) {
            data += chunk;
        });

        //Still need to figure out how to make two calls on a page
        response.on('end', function () {
            data = JSON.parse(data);
           //console.log(data);
            // res.render('characters', {
            //     filmObj: data.results,
            //     header: "Star Wars Character Index"

            // });

        });   
    }

    var getFilms = function (){
        
        http.request(options2, callback2).end();
    }

    getFilms();

});

module.exports = router;