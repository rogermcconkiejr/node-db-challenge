const db = require('../data/db-config.js');

module.exports = {
    get,
    add
}

function get(){
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    .select('projects.name', 'tasks.description')
}

function add(task){
    return db('tasks')
    .insert(task)
}
