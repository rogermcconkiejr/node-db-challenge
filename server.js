const express = require('express');

const ResourceRouter = require('./resources/resource-router');
const TaskRouter = require('./tasks/task-router');
const ProjectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());
server.use('/resources', ResourceRouter);
server.use('/tasks', TaskRouter);
server.use('/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send('Hi Everyone!')
})

module.exports = server;