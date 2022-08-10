const deleteBookById = require('./handlers/deleteBookById')
const editBookById = require('./handlers/editBookById')
const getAllBooks = require('./handlers/getAllBooks')
const getBookById = require('./handlers/getBookById')
const saveBook = require('./handlers/saveBook')

const routes = [
    // Add
    {
        method: 'POST',
        path: '/books',
        handler: saveBook
    },

    // Get All
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks
    },

    // Get By Id
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById
    },

    // Edit
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookById
    },

    // Delete
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookById
    },
]

module.exports = routes