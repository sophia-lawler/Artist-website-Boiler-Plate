exports.up = (knex) => {
  return knex.schema.createTable('shows', (table) => {
    table.increments('id')
    table.string('title')
    table.string('date')
    table.string('description')
    table.string('gallery')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('shows')
}
