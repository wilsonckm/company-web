var express = require('express');
var router = express.Router();
// const projectsCtrl = require('..controllers/projectsControl');

router.get('/', function(req, res, next) {
  res.render('pages/projects', { title: 'Company Website' });
});

module.exports = router;
