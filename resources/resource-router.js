const express = require('express')

const router = express.Router();

const ResourceModel = require('./resource-model');

router.get('/', (req, res) => {
    ResourceModel.get()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    ResourceModel.add(req.body)
    .then(resources => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;