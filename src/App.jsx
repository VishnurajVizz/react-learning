import { useState } from "react";
import { Route, Routes, Link, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import BookList from "./components/bookList";
import Book from "./components/book";
import NewBook from "./components/newBook";
import NotFound from "./components/notFound";
import Root from "./components/root";
import BookRoutes from "./components/BookRoutes";

function App() {
  let pages = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
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

      {pages}

      {/* <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
      </Routes> */}
    </>
  );
}

export default App;
