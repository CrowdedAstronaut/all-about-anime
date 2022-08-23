import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <h1>
          <a href="/">All About Anime</a>
        </h1>

        <button
          className="temporary"
          onClick={handleToggle}
        >
          {navbarOpen ? "Close" : "Open"}
        </button>
        <ul
          className={`menuNav ${
            navbarOpen ? " showMenu" : ""
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
        </ul>
      </div>
    </nav>
  );
}