const Staff = require('../models/staffModel.js');

module.exports = {
    index,
};

function index (req, res) {
    res.render('pages/staff', {
        staff: Staff.getAll(),
        title: 'Staff of Company'
    });
}