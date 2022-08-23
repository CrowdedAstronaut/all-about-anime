import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNarwhal,
  faBars,
  faXmark,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">
        All About Anime
        <FontAwesomeIcon icon={faNarwhal} />
      </h1>
      <div className="menu-icon"></div>
      {/* <button className="temporary" onClick={handleToggle}>
        {navbarOpen ? "Close" : "Open"}
      </button> */}
      <ul>
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
