
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Build Table', description:'Build a table of wood.',completed:false, resource_id: 1},
        {name: 'Paint Picture', description:'Paint an acrylic painting.',completed:false, resource_id: 4},
        {name: 'Excercise', description:'Get into shape.',completed:false, resource_id: 7},

      ]);
    });
};
