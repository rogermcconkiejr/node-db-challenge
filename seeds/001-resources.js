
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'wood', description:'oak'},
        {name: 'hammer', description:''},
        {name: 'nails', description:'1 inch'},
        {name: 'paper', description:''},
        {name: 'paint', description:'acrylic'},
        {name: 'pencil', description:'lead'},
        {name: 'shoes', description:'running'},
      ]);
    });
};
