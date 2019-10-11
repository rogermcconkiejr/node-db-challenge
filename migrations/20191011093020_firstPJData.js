
exports.up = function(knex) {
    return knex.schema
    .createTable('resources', tbl=>{
        tbl.increments();
  
        tbl.string('name', 255)
        .notNullable()
        .unique();

        tbl.text('description');
    })
    .createTable('tasks', tbl=>{
      tbl.increments();

      tbl.text('description').notNullable();

      tbl.string('notes', 500);

      tbl.boolean('completed')
      .defaultTo(false)
      .notNullable();

      tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
        
    })
    .createTable('projects', tbl=>{
        tbl.increments();

        tbl.string('name').notNullable();

        tbl.text('description');

        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    
        tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    
      })
  };

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
};