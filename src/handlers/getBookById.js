const books = require('../books')

const getBookById = (request, h) => {
    const { id } = request.params
    const book = books.filter((book) => book.id === id)[0]

    if (!book) {
        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan'
        })
        response.code(404)
        return response
    }

    return {
        status: 'success',
        data: {
            book,
        },
    }
}

module.exports = getBookById