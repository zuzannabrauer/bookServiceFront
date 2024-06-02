import { createSlice } from '@reduxjs/toolkit'
import {getBooks} from "./thunks.js";

const initialState = {
    books: [],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.books = action.payload
        })
    }
})

export const { setBooks } = booksSlice.actions

export default booksSlice.reducer
