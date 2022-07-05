import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import About from "../About/About";

export default function NavHeader() {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      variant="light"
      expand="md"
    >
      <Navbar.Brand as={Link} to="/">
        <h1 className="title">ALL ABOUT ANIME!</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/">
          <h2 className="nav-title">HOME</h2>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          <h2 className="nav-title">ABOUT</h2>
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          <h2 className="nav-title">SEARCH</h2>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
