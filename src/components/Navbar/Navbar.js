import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faBars,
  faXmark,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">
        <FontAwesomeIcon icon={faNewspaper} />
        All About Anime
      </h1>
      <div className={`menu-icon`} onClick={handleToggle}>
        <FontAwesomeIcon icon={navbarOpen ? faBars : faXmark} />
      </div>

      <ul className={`nav-menu ${navbarOpen ? " active" : ""}`}>
        {MenuItems.map((item, idx) => {
          return (
            <li key={idx}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
