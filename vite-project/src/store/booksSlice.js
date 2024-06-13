import { createSlice } from '@reduxjs/toolkit'
import {createBook, getBooks, editBook, removeBook, editInFavourites} from "./thunks.js";

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
            state.books = action.payload.map(book => ({ ...book, isInFavourites: Boolean(book.isInFavourites) }))
        })
        builder.addCase(createBook.fulfilled, (state, action) => {
            state.books.push(action.payload)
        })
        builder.addCase(editBook.fulfilled, (state, action) => {
            state.books = state.books.map(book => {
                if (book.id === Number(action.payload.id))
                    return {
                        ...action.payload,
                        id: Number(action.payload.id),
                        isInFavourites: Boolean(book.isInFavourites)
                    }
                else return book
            })
        })
        builder.addCase(removeBook.fulfilled, (state, action) => {
            state.books = state.books.filter(book => book.id !== Number(action.payload))
        })
        builder.addCase(editInFavourites.fulfilled, (state, action) => {
            state.books = state.books.map(book => {
                if (book.id === Number(action.payload.id))
                    return { ...book, isInFavourites: action.payload.isInFavourites }
                else return book
            })
        })
    }
})

export default booksSlice.reducer
