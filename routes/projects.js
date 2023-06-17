var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projectsControl');

router.get('/', projectsCtrl.index);

module.exports = router;
