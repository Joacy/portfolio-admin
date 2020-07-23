exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('giturl').notNullable();
        table.string('techs').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};