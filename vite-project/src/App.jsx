import { BookList } from './components/BookList/BookList.jsx'
import {Header} from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CreateBookForm} from "./components/CreateBookForm/CreateBookForm.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getBooks} from "./store/thunks.js";
import './button.css'
import {EditBookForm} from "./components/EditBookForm/EditBookForm.jsx";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path="/" element={<BookList />} />
              <Route exact path="/create-book" element={<CreateBookForm />} />
              <Route exact path="/edit-book/:id" element={<EditBookForm />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
