const express = require('express')
require('dotenv').config({path: './config/.env'})
const routing = require('./routes/router')
const app = express()

app.use(express.json())
app.use('/', routing)
app.use(express.static('../client/'))



app.listen(process.env.PORT, () => {
  console.log("Server ON", process.env.PORT)
})