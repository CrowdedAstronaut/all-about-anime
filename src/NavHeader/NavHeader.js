import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import About from "../About/About";
import Home from "../Home/Home";
import Search from "../SearchForm/SearchForm";
export default function NavHeader() {
  return (
    <nav>
      <h2>
        <a href="/">All About Anime</a>
      </h2>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
      </ul>
    </nav>
  );
}
