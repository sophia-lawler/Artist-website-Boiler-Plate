const connection = require('./db')

module.exports = {
  getShows,
}

function getShows(db = connection) {
  return db('shows').select()
}
