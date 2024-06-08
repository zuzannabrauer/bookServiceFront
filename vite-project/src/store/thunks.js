import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchBooks, postBook, putBook, deleteBook} from "./api.js";

export const getBooks = createAsyncThunk(
    'books/getAll',
    async () => {
        const response = await fetchBooks()
        return response.data
    }
)

export const createBook = createAsyncThunk(
    'books/create',
    async bookFormData => {
        const response = await postBook(bookFormData)
        return response.data
    }
)

export const editBook = createAsyncThunk(
    'books/edit',
    async ({id, book}) => {
        const response = await putBook(id, book)
        return response.data
    }
)

export const removeBook = createAsyncThunk(
    'books/delete',
    async id => {
        await deleteBook(id)
        return id
    }
)
