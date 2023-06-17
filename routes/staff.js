var express = require('express');
var router = express.Router();
const staffControl = require('../controllers/staffControl');


// router.get('/', function(req, res, next) {
//   res.render('pages/staff', { title: 'Company Website' });
// });

router.get('/', staffControl.index);

module.exports = router;
