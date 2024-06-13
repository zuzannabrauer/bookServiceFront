import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:3000'
})

export const fetchBooks = async () => await API.get('/books')

export const postBook = async book => await API.post('/books', book, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
})

export const putBook = async (id, book) => await API.put(`/books/${id}`, book, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
})

export const deleteBook = async id => await API.delete(`/books/${id}`)

export const putInFavourites = async (id, isInFavourites) => await API.put(`/books/${id}/favourites/${isInFavourites}`)
