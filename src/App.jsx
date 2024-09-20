import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import BookList from "./components/bookList";
import Book from "./components/book";
import NewBook from "./components/newBook";
import NotFound from "./components/notFound";
import Root from "./components/root";
import BookRoutes from "./components/BookRoutes";

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
        <Route path="/books/*" element={<BookRoutes />} />
      </Routes>
    </>
  );
}

export default App;
