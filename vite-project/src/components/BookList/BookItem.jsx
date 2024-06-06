import './BookItem.css'
import {Link} from "react-router-dom";

export const BookItem = ({ book }) => {
    return (
        <div className="bookItem">
            <div className="bookItem__details">
                <h3 className="bookItem__details__title">{book.title}</h3>
                <div className="bookItem__details__secondary">
                    <span>Author: {book.author}</span>
                    <span>Pages: {book.pages}</span>
                    <span>Year: {book.year}</span>
                    <span>Genre: {book.genre}</span>
                </div>
            </div>
            <Link to={`/edit-book/${book.id}`}>
                <button>Edit book</button>
            </Link>
        </div>
    )
}
