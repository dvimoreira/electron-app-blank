const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Foi!')
})

app.get('/foi', (req, res) => {
    res.send('Hello World TESTINHHO DO DAVID!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})