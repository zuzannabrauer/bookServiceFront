import { BookList } from './components/BookList/BookList.jsx'
import {Header} from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CreateBookForm} from "./components/CreateBookForm/CreateBookForm.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getBooks} from "./store/thunks.js";

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
          </Routes>
      </BrowserRouter>
  )
}

export default App
