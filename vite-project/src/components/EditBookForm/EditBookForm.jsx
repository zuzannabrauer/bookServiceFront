import {Link, useParams} from "react-router-dom";
import './EditBookForm.css'
import '../../form.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBook, editBook} from './../../store/thunks.js'
import {useNavigate} from "react-router-dom";
import {ImageInput} from "../ImageInput/ImageInput.jsx";

export const EditBookForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const bookToUpdate = useSelector(state => state.books.books.find(book => book.id === Number(id)))
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [year, setYear] = useState('')
    const [genre, setGenre] = useState('')
    const [shouldRemoveImage, setShouldRemoveImage] = useState(false)
    const [image, setImage] = useState()

    const submitForm = event => {
        event.preventDefault()
        const data = new FormData()
        data.append('title', title)
        data.append('author', author)
        data.append('pages', pages)
        data.append('year', year)
        data.append('genre', genre)
        data.append('removeFile', shouldRemoveImage)
        data.append('file', image)
        dispatch(editBook({ id: bookToUpdate.id, bookFormData: data }))
        navigate('/')
    }

    useEffect(() => {
        if (bookToUpdate) {
            setTitle(bookToUpdate.title)
            setAuthor(bookToUpdate.author)
            setPages(bookToUpdate.pages)
            setYear(bookToUpdate.year)
            setGenre(bookToUpdate.genre)
        }
    }, [bookToUpdate])

    // const submitForm = event => {
    //     event.preventDefault()
    //     dispatch(editBook({id, book: {title, author, pages, year, genre}}))
    //     navigate('/')
    // }

    const onImageChange = newImage => {
        setImage(newImage)
        setShouldRemoveImage(newImage === undefined)
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
            <ImageInput defaultValue={`http://localhost:3000/${bookToUpdate.id}`} onChange={onImageChange} />
            <div className="buttonsWrapper">
                <button onClick={event => submitForm(event)}>Submit</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </div>
        </form>
    )
}
