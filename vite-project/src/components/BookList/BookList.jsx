import {BookItem} from "./BookItem.jsx";
import { Link } from 'react-router-dom'
import './BookList.css'
import {useSelector} from "react-redux";
import {useState} from "react";

export const BookList = () => {
    const { books } = useSelector((state) => state.books)
    const [searchQuery, setSearchQuery] = useState('')

    const matchesSearchQuery = book =>
        searchQuery.length === 0 || book.title.includes(searchQuery) || book.author.includes(searchQuery)

    return (
        <div className="bookList">
            <div className="bookList__header">
                <h2 className="bookList__header__title">Here are all of your books</h2>
                <input className="bookList__searchBar" type="text" placeholder="search..."
                       onInput={event => setSearchQuery(event.target.value)} />
                <Link to="/create-book">
                    <button className="bookList__header__newBookButton">+ New book</button>
                </Link>
            </div>
            {books
                .filter(matchesSearchQuery)
                .map(book => <BookItem key={book.id} book={book}/>)}
        </div>
    )
}
