const express = require('express')
const server = express()

const port = process.env.PORT || 3000
console.log(port)

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
