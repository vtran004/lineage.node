var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Main');
  next();
});

router.get('/', function (req, res, next) {
  res.render('index');
});

router.use(function (req, res, next) {
  if (req.path.indexOf('.html') > -1) {
    var path = req.path.substring(1).replace('.html', '');
    res.render(path);
  } else next();
});

router.use(function (req, res, next) {
  res.status(404).end();
});

module.exports = router;