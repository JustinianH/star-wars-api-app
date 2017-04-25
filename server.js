// MODULES

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;


var path = require('path');

var serveStatic = require('serve-static');

// Set Routes
var routes = require('./routes/index');  
var characters = require('./routes/characters');  
var planets = require('./routes/planets');  
var films = require('./routes/films');  


var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Apply Routes
app.use(express.static('views'));
app.use('/', routes);
app.use('/characters', characters);
app.use('/planets', planets);
app.use('/films', films);




app.listen(port, function () {
	console.log('Example app listening on port' + port + '!')
})

