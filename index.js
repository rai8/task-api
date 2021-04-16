require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3500
const bookRouter = require('./routes/books')

//connceting to database
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log(`-----Database connected successfully-------`))
  .catch(e => console.log(e))

//setting middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', bookRouter)

//

//starting up the server
app.listen(PORT, () => console.log(`-------Server is up and running-----`))
