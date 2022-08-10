const books = require('../books')

const getAllBooks = (request, h) => {
    const { name, reading, finished } = request.query
    const mapItem = (props) => {
        return props.map((item) => ({
            id: item.id,
            name: item.name,
            publisher: item.publisher,
        }))
    }

    // Get All By Name
    if (name) {
        const byName = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))
        const response = h.response({
            status: 'success',
            data: {
                books: mapItem(byName),
            },
        })
        response.code(200)
        return response
    }

    // Get All By Reading
    if (reading) {
        // If reading false
        if (reading === '0') {
            const byReading = books.filter((book) => book.reading === false)
            const response = h.response({
                status: 'success',
                data: {
                    books: mapItem(byReading),
                },
            })
            response.code(200)
            return response

            // If reading true
        } else if (reading === '1') {
            const byReading = books.filter((book) => book.reading === true)
            const response = h.response({
                status: 'success',
                data: {
                    books: mapItem(byReading),
                },
            })
            response.code(200)
            return response
        }
    }

    // Get All By Finished
    if (finished) {
        // If finished false
        if (finished === '0') {
            const byFinished = books.filter((book) => book.finished === false)
            const response = h.response({
                status: 'success',
                data: {
                    books: mapItem(byFinished),
                },
            })
            response.code(200)
            return response

            // If finished true
        } else if (finished === '1') {
            const byFinished = books.filter((book) => book.finished === true)
            const response = h.response({
                status: 'success',
                data: {
                    books: mapItem(byFinished),
                },
            })
            response.code(200)
            return response
        }
    }

    // Get All Books Without Query
    const response = h.response({
        status: 'success',
        data: {
            books: mapItem(books),
        }
    })
    response.code(200)
    return response
}

module.exports = getAllBooks