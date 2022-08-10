const { nanoid } = require('nanoid')
const books = require('../books')

const saveBook = (request, h) => {
    const id = nanoid(16)
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt
    let finished

    if (pageCount === readPage) {
        finished = true
    } else {
        finished = false
    }

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt
    }

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        response.code(400)
        return response
    } else if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        })
        response.code(400)
        return response
    }

    books.push(newBook)
    const isSuccess = books.filter((book) => book.id === id).length > 0

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        })
        response.code(201)
        return response
    }

    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
    })
    response.code(500)
    return response
}

module.exports = saveBook