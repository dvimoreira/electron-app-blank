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

// DATABASE SYNC
// async () => {
//   const mariaDB = require('./config/database/mariadb')
//   const sqliteDB = require('./config/database/sqlite3')

//   try {
//     const mariaDBResult = await mariaDB.sync()
//     const sqliteDBResult = await sqliteDB.sync()

//     console.log(mariaDBResult)
//     console.log(sqliteDBResult)
//   } catch (e) {
//     console.log(e)
//   }
// }