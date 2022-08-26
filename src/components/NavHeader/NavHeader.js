import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./NavHeader.css";



export default function NavHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <header className="page-header" id="header">
      <button
        className={`menuNav ${
          navbarOpen ? " navbar open" : ""
        }`}
        onClick={handleToggle}
        aria-label="Open main menu."
        rel="noopener"
      >
        <span className="sr-only">Open main menu</span>
        <FontAwesomeIcon icon={faBars} aria-hidden="true" />
      </button>
      <nav>
        <ul className="page-links">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <button
          className="close"
          href="#"
          aria-label="Close main menu."
        >
          <span className="sr-only">Close main menu</span>
          <FontAwesomeIcon
            icon={faXmark}
            className="navicon"
            aria-hidden="true"
          />
          <FontAwesomeIcon
            icon={faWindowClose}
            className="far fa-window-close"
            aria-hidden="true"
          />
        </button>
      </nav>
    </header>
  );
}
