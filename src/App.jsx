import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NotFound from "./components/notFound";
import BookRoutes from "./components/BookRoutes";

function App() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/" state={"Home page"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" state={"Books page"}>
              Books
            </Link>
          </li>
        </ol>
      </nav>
      <small>{location.state}</small>
      <br />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
      </Routes>
    </>
  );
}

export default App;
