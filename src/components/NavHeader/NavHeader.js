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
    <header class="page-header" id="header">
      <button
        class="hamburger"
        href="#navbar"
        aria-label="Open main menu."
        rel="noopener"
      >
        <span class="sr-only">Open main menu</span>
        <FontAwesomeIcon icon={faBars} aria-hidden="true" />
      </button>
      <nav id="navbar">
        {/* <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> */}
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
        <button class="close" href="#" aria-label="Close main menu.">
          <span class="sr-only">Close main menu</span>
          <FontAwesomeIcon
            icon={faXmark}
            className="navicon"
            aria-hidden="true"
          />
          <FontAwesomeIcon
            icon={faWindowClose}
            className="far fa-window-close "
            aria-hidden="true"
          />
        </button>
      </nav>
    </header>
  );
}
