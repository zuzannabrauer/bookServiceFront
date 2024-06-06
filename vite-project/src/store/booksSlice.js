import { createSlice } from '@reduxjs/toolkit'
import {createBook, getBooks, editBook, removeBook} from "./thunks.js";

const initialState = {
    books: [],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.books = action.payload
        })
        builder.addCase(createBook.fulfilled, (state, action) => {
            state.books.push(action.payload)
        })
        builder.addCase(editBook.fulfilled, (state, action) => {
            console.log(action)
            state.books = state.books.map(book => {
                if (book.id === Number(action.payload.id))
                    return { ...action.payload, id: Number(action.payload.id) }
                else return book
            })
        })
        builder.addCase(removeBook.fulfilled, (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id)
        })
    }
})

export default booksSlice.reducer
