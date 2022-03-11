const express = require('express')
const app = express()
const port = 3000

const  { 
  getClients,
} = require('./controllers/clients.js')

app.use('/', getClients)

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})