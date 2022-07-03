import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import About from "../About/About";

export default function NavHeader() {
  return <NavLink to="/about"> About </NavLink>;
}
