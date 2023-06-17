var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Company Website' });
});

// // router.get('/about', function(req, res, next) {
// //   res.render('pages/about', { title: 'Company Website' });
// // });

// // router.get('/projects', function(req, res, next) {
// //   res.render('pages/projects', { title: 'Company Website' });
// // });

// // router.get('/staff', function(req, res, next) {
// //   res.render('pages/staff', { title: 'Company Website' });
// // });

// // router.get('/contact', function(req, res, next) {
// //   res.render('pages/contact', { title: 'Company Website' });
// // });

// // router.get('/links', function(req, res, next) {
// //   res.render('pages/links', { title: 'Company Website' });
// // });

module.exports = router;
