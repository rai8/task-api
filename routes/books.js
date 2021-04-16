const express = require('express')
const BooksController = require('../controllers/booksController')
const router = express.Router()

//store data to database
router.post('/create', BooksController.createBook)
//get all books
router.get('/books', BooksController.getBooks)

//export router
module.exports = router
