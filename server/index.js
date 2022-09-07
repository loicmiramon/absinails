const express = require('express')
require('dotenv').config({path: './config/.env'})
require('./config/db')
const cors = require('cors')
const routing = require('./routes/router')
const app = express()

app.use(express.json())
app.use('/', routing)
app.use(express.static('../client/'))
app.use(cors())



app.listen(process.env.PORT, () => {
  console.log("Server ON", process.env.PORT)
})