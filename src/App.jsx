import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import BookList from "./components/bookList";
import Book from "./components/book";
import NewBook from "./components/newBook";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="books/new" element={<NewBook />} />
      </Routes>
    </>
  );
}

export default App;
