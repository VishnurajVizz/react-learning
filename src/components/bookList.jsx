import { Link, useSearchParams } from "react-router-dom";

const books = [
  {
    name: "Book 1",
    library: "Chennai",
  },
  {
    name: "Book 2",
    library: "CBE",
  },
  { name: "Book 3", library: "Bangalore" },
];

export default function BookList() {
  const [location, setLocation] = useSearchParams({ location: "" });
  return (
    <>
      <h1>BookList</h1>
      <Link to="/books/1">{books[0].name}</Link>
      <br />
      <Link to="/books/1">{books[1].name}</Link>
      <br />
      <Link to="/books/3">{books[2].name}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <br />
      <label>Search a location </label>
      <input
        type="text"
        value={location.location}
        onChange={(e) => {
          setLocation({ location: e.target.value });
        }}
      />
      <h2>Avaiable </h2>
      {books.map((book) => {
        if (book.library == location.get("location")) {
          return book.library;
        }
      })}
    </>
  );
}
