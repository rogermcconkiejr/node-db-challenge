
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'gather supplies', notes:'go to home depot', completed:false},
        {description: 'nail wood together', notes:'', completed:false},
        {description: 'get paint and pencil', notes:'', completed:false},
        {description: 'paint on the paper', notes:'use small strokes', completed:false},
        {description: 'go on run', notes:'use shoes', completed:false},

      ]);
    });
};
