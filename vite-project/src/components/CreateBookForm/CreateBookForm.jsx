import {Link} from "react-router-dom";
import './CreateBookForm.css'
import '../../form.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createBook} from './../../store/thunks.js'
import {useNavigate} from "react-router-dom";

export const CreateBookForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [year, setYear] = useState('')
    const [genre, setGenre] = useState('')

    const submitForm = event => {
        event.preventDefault()
        dispatch(createBook({title, author, pages, year, genre}))
        navigate('/')
    }

    return (
        <form>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" onInput={event => setTitle(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text" onInput={event => setAuthor(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="pages">Pages</label>
                <input id="pages" name="pages" type="number" onInput={event => setPages(event.target.value)}/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="number" onInput={event => setYear(event.target.value)} />
            </div>
            <div className="inputWrapper">
                <label htmlFor="genre">Genre</label>
                <input id="genre" name="genre" type="text" onInput={event => setGenre(event.target.value)}/>
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
