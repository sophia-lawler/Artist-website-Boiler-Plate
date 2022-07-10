const connection = require('./db')

module.exports = {
  getShows,
}

function getShows(db = connection) {
  console.log('hitting db function')
  return db('shows').select()
}
