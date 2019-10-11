const express = require('express')

const router = express.Router();

const TaskModel = require('./task-model');

router.get('/', (req, res, completed) => {
    {completed ? 'true' : 'false'}
    TaskModel.get()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    TaskModel.add(req.body)
    .then(tasks => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;