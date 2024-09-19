import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BookList() {
  return (
    <>
      <Outlet />
      <h1>BookList</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
    </>
  );
}
