const Book = require('../models/Book')

const BooksController = {
  async createBook(req, res) {
    try {
      const book = req.body
      const newBook = new Book(book)
      const savedBook = await newBook.save()
      res.status(201).json('Book information saved successfully')
    } catch (err) {
      res.json(err.message)
    }
  },
  async getBooks(req, res) {
    try {
      const books = await Book.find()
      res.json(books)
    } catch (err) {
      res.json(err.message)
    }
  },
}

module.exports = BooksController
