const express = require('express')
const db = require('../data/dbFunctions')

const router = express.Router()

module.exports = router

//api/v1/shows
router.get('/', (req, res) => {
  console.log('hitting')
  db.getShows()
    .then((shows) => {
      console.log(shows)
      res.json({ shows })
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve shows',
        },
      })
    })
})
