const express = require('express')

const router = express.Router();

const ProjectModel = require('./project-model');

router.get('/', (req, res) => {
    ProjectModel.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    ProjectModel.add(req.body)
    .then(projects => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;