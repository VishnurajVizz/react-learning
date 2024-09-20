import { Link, Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </>
  );
}
