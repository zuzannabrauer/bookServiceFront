import './BookItem.css'

export const BookItem = ({ book }) => {
    return (
        <div className="bookItem">
            <h3 className="bookItem__title">{book.title}</h3>
            <div className="bookItem__details">
                <span>Author: {book.author}</span>
                <span>Pages: {book.pages}</span>
                <span>Year: {book.year}</span>
                <span>Genre: {book.genre}</span>
            </div>
        </div>
    )
}
