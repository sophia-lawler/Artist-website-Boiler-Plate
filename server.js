const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

const shows = require('./routes/shows')
// server.use('/api/v1/shows', shows)

server.get('/', (req, res) => {
  console.log('hitting server')
  // res.sendFile(path.join(__dirname, 'public', 'index.html'))
  res.send('hello')
})

module.exports = server
