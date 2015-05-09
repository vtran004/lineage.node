/// <reference path="typings/node/node.d.ts"/>
var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser');
var mainRoutes = require("./routes/main");
var phoneRoutes = require("./routes/phone");
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', [__dirname+'/views', __dirname+'/public']);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.use('/api', phoneRoutes);
app.use('/', mainRoutes);

app.listen(3000, function(err){
    if(err) console.log(err);
});
