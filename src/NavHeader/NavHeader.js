import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function NavHeader() {
  return (
    <nav>
      <div className="nav-wrapper">
        <h1>
          <a href="/">All About Anime</a>
        </h1>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
        </ul>
      </div>
    </nav>
  );
}
