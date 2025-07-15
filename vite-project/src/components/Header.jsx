import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'primeicons/primeicons.css';
import { useState } from 'react';

const Header = ({ mode, modeIcon, toggleMode }) => {
  const [expanded, setExpanded] = useState(false);

  // Remove local state and use props
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg={`${mode}`} data-bs-theme={`${mode}`} fixed='top' >
      <Container fluid style={{ color: `${mode === 'dark' ? 'white' : 'black'}` }}>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
          {expanded ? (
            <i className="pi pi-times" style={{ fontSize: "1.5rem" }}></i>
          ) : (
            <i className="pi pi-bars" style={{ fontSize: "1.5rem" }}></i>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" onSelect={() => setExpanded(false)}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Accor'>Accor</Nav.Link>
            <Nav.Link href='/Form'>Form</Nav.Link>
            <Nav.Link href='/Clock'>Clock</Nav.Link>
            <NavDropdown title="DropDown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <a style={{ marginTop: '10px', textDecoration: 'none', color: 'inherit' }} onClick={toggleMode} >
              <span className={`${modeIcon}`}>{modeIcon}</span>
            </a>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header