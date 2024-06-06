import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchBooks, postBook, putBook, deleteBook} from "./api.js";

export const getBooks = createAsyncThunk(
    'books/getAll',
    async () => {
        const response = await fetchBooks()
        console.log(response.data)
        return response.data
    }
)

export const createBook = createAsyncThunk(
    'books/create',
    async book => {
        const response = await postBook(book)
        return response.data
    }
)

export const editBook = createAsyncThunk(
    'books/edit',
    async ({id, book}) => {
        console.log(id)
        console.log(book)
        const response = await putBook(id, book)
        return response.data
    }
)

export const removeBook = createAsyncThunk(
    'books/delete',
    async id => await deleteBook(id)
)
