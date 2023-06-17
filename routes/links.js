var express = require('express');
var router = express.Router();
const linksControl = require('../controllers/linksControl');

router.get('/', linksControl.index);

module.exports = router;
