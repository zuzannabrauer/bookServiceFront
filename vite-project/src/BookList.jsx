import { useState, useEffect } from 'react'
import {BookItem} from "./BookItem.jsx";
import './BookList.css'

export const BookList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getFromBackend = async () => {
            const res = await fetch('http://localhost:3000/books')
            const data = await res.json()
            console.log(res)
            console.log(data)
            setBooks(data.data)
        }
        getFromBackend()
    }, []);

    return (
        <div className="bookList">
            <div className="bookList__header">
                <h2 className="bookList__header__title">Here are all of your books</h2>
                <button className="bookList__header__newBookButton">+ New book</button>
            </div>
            {books.map(book => <BookItem key={book.ID} book={book} />)}
        </div>
    )
}
