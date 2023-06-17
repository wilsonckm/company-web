const Projects = require('../models/projectsModel');

module.exports = {
    index,
};

function index (req, res) {
    res.render('pages/projects', {
        projects: Projects.getAll(),
        title: 'Here are some of our projects'
    });

}