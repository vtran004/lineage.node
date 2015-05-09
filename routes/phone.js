var express = require('express');
var router = express.Router();
var Userphone = require('../models/userphone');

router.use(function (req, res, next) {
  console.log('API Call');
  next();
});

router.route('/userphones')
.get(function (req, res, next) {
		Userphone.find(function (err, userphones) {
			if(err) res.send(err);
			res.json(userphones);
		});
})
.post(function (req, res, next) {
		var userphone = new Userphone();
		userphone.name = req.body.name;
		userphone.make = req.body.make;
		userphone.year = req.body.year;
	
		userphone.save(function (err) {
			if (err) res.send(err);
			res.json({ message: 'Userphone created!' });
		});
});

router.route('/userphones/:id')
.get(function(req, res, next){
	Userphone.findById(req.params.id, function(err, userphone){
		if(err) res.send(err);
		res.json(userphone);
	});
})
.put(function(req, res, next){
	Userphone.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, userphone){
		if(err) res.send(err);
		res.json(userphone);
	});
})
.delete(function(req, res, next){
	Userphone.findByIdAndRemove(req.params.id, function(err){
		if(err) res.send(err);
		res.json({message: 'Userphone removed!!!'});
	})
});

router.get('/phones', function (req, res, next) {
	res.json({ message: 'Welcome to API' });
});

router.use(function (req, res, next) {
  res.status(404).end();
});

module.exports = router;