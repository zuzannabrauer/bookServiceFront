import {Link, useParams} from "react-router-dom";
import './EditBookForm.css'
import '../../form.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editBook} from './../../store/thunks.js'
import {useNavigate} from "react-router-dom";

export const EditBookForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const bookToUpdate = useSelector(state => {
        console.log(state.books)
        console.log(state.books.books.find(book => book.id === Number(id)))
        return state.books.books.find(book => book.id === Number(id))
    })
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [year, setYear] = useState('')
    const [genre, setGenre] = useState('')

    useEffect(() => {
        if (bookToUpdate) {
            setTitle(bookToUpdate.title)
            setAuthor(bookToUpdate.author)
            setPages(bookToUpdate.pages)
            setYear(bookToUpdate.year)
            setGenre(bookToUpdate.genre)
        }
    }, [bookToUpdate]);

    const submitForm = event => {
        event.preventDefault()
        dispatch(editBook({id, book: {title, author, pages, year, genre}}))
        navigate('/')
    }

    return (
        <form>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" value={title} onInput={event => setTitle(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text" value={author} onInput={event => setAuthor(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="pages">Pages</label>
                <input id="pages" name="pages" type="number" value={pages} onInput={event => setPages(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="number" value={year} onInput={event => setYear(event.target.value)} />
            </div>
            <div className="inputWrapper">
                <label htmlFor="genre">Genre</label>
                <input id="genre" name="genre" type="text" value={genre} onInput={event => setGenre(event.target.value)}/>
            </div>
            <div className="buttonsWrapper">
                <button onClick={event => submitForm(event)}>Submit</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </div>
        </form>
    )
}
