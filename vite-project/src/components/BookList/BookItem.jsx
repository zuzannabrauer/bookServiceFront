import './BookItem.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeBook} from "../../store/thunks.js";
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ImageWithFallback} from "./ImageWithFallback.jsx";
import {FavouritesIcon} from "./FavouritesIcon.jsx";

export const BookItem = ({ book }) => {
    const dispatch = useDispatch()

    const deleteBook = () => {
        dispatch(removeBook(book.id))
    }

    return (
        <div className="bookItem">
            <ImageWithFallback src={`http://localhost:3000/${book.id}?${new Date()}`}
                               className="bookItem__image"
                               fallback="/book_icon.svg" />
            <div className="bookItem__details">
                <h3 className="bookItem__details__title">{book.title}</h3>
                <div className="bookItem__details__secondary">
                    <span>Author: {book.author}</span>
                    <span>Pages: {book.pages}</span>
                    <span>Year: {book.year}</span>
                    <span>Genre: {book.genre}</span>
                </div>
            </div>
            <FavouritesIcon id={book.id} isInFavourites={book.isInFavourites} />
            <div className="bookItem__buttons">
                <Link to={`/edit-book/${book.id}`}>
                    <button>
                        <FontAwesomeIcon icon={faPen} /> Edit book
                    </button>
                </Link>
                <button onClick={deleteBook}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
            </div>
        </div>
    )
}
