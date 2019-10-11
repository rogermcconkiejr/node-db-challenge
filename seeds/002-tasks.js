
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'gather supplies', notes:'go to home depot', completed:false, project_id:1},
        {description: 'nail wood together', notes:'', completed:false, project_id:1},
        {description: 'get paint and pencil', notes:'', completed:false, project_id:2},
        {description: 'paint on the paper', notes:'use small strokes', completed:false, project_id:2},
        {description: 'go on run', notes:'use shoes', completed:false, project_id:3},

      ]);
    });
};
