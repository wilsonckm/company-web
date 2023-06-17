const Links = require('../models/linksModel.js')

module.exports = {
    index,
};

function index (req, res) {
    res.render('pages/links', {
        links: Links.getAll(),
        title: 'Here are links of Company'
    });
}