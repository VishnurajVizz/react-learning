import { Route, Routes } from "react-router-dom";
import BookList from "./bookList";
import Book from "./book";
import NewBook from "./newBook";
import Root from "./root";

export default function BookRoutes() {
  return (
    <>
      {/* <Root />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes> */}

      {/* Another way */}

      <Routes>
        <Route element={<Root />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
