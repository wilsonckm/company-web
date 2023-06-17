var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/contact', { title: 'Company Website' });
});

module.exports = router;
