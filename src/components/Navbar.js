import { Link } from "react-router-dom";
import Logo from "../assets/ARTGRAM.png";
import Search from "../assets/search.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
function Header() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Navbar fixed="top" expand="xl" bg="light">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && (
                <>
                  <Nav.Link href="/paintings">GALLERY</Nav.Link>
                  <Navbar.Brand href="/paintings">
                    <img
                      src={Logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Navbar.Brand>
                  <NavDropdown title={user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href={`/users/${user.name}`}>
                      {user && user.name}'s Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={logOutUser}>
                      LOGOUT
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/newPainting">NEW PAINTING</Nav.Link>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search an artist"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="secondary">Search</Button>
                  </Form>
                </>
              )}

              {!isLoggedIn && (
                <>
                  {" "}
                  <Nav.Link href="/signup">SIGN UP</Nav.Link>
                  <Navbar.Brand href="/">
                    <img
                      src={Logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Navbar.Brand>
                  <Nav.Link href="/login">LOGIN</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
