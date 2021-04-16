const mongoose = require('mongoose')
const { Schema } = mongoose

//create schema
const bookSchema = Schema({
  title: String,
  author: String,
})

//define model
const Book = mongoose.model('Book', bookSchema)

//export model
module.exports = Book
