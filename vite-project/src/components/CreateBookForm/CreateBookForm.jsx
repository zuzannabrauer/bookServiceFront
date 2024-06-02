import {Link} from "react-router-dom";
import './CreateBookForm.css'
import '../../form.css'

export const CreateBookForm = () => {
    return (
        <form>
            <div className="inputWrapper">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text"/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text"/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="pages">Pages</label>
                <input id="pages" name="pages" type="number"/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="number"/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="genre">Genre</label>
                <input id="genre" name="genre" type="text"/>
            </div>
            <div className="buttonsWrapper">
                <button>Submit</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </div>
        </form>
    )
}
