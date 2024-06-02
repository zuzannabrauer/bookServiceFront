import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchBooks} from "./api.js";

export const getBooks = createAsyncThunk(
    'books/getAll',
    async () => {
        const response = await fetchBooks()
        return response.data.data
    },
)
