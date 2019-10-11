const db = require('../data/db-config.js');

module.exports = {
    get,
    add
}

function get(){
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    .select('projects.name', 'projects.completed', 'tasks.description', 'tasks.completed')
}

function add(task){
    return db('tasks')
    .insert(task)

}
