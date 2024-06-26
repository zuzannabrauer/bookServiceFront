import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchBooks, postBook, putBook, deleteBook, putInFavourites} from "./api.js";

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
    async ({id, bookFormData}) => {
        const response = await putBook(id, bookFormData)
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

export const editInFavourites = createAsyncThunk(
    'books/editInFavourites',
    async ({id, isInFavourites}) => {
        const response = await putInFavourites(id, isInFavourites)
        return response.data
    }
)
