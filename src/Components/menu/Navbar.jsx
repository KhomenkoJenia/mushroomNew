import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.scss";
import Decor from "../decor/decor";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Decor />
        <Navbar.Brand className="anima-logo" href="#home">
          Mushroom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link className="anima-logo-new" href="#home">
              About
            </Nav.Link>
            <Nav.Link className="anima-logo-new" href="#link">
              Shop
            </Nav.Link>
            <Nav.Link className="anima-logo-new" href="#link">
              Сooperation
            </Nav.Link>
            <Nav.Link className="anima-logo-new" href="#link">
              Gallery
            </Nav.Link>
            <Nav.Link className="anima-logo-new" href="#link">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
