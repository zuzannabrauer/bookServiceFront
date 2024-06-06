import {BookItem} from "./BookItem.jsx";
import { Link } from 'react-router-dom'
import './BookList.css'
import {useSelector} from "react-redux";

export const BookList = () => {
    const { books } = useSelector((state) => state.books)

    return (
        <div className="bookList">
            <div className="bookList__header">
                <h2 className="bookList__header__title">Here are all of your books</h2>
                <Link to="/create-book">
                    <button className="bookList__header__newBookButton">+ New book</button>
                </Link>
            </div>
            {books.map(book => <BookItem key={book.id} book={book}/>)}
        </div>
    )
}
