import Logo from "../assets/ARTGRAM.png";
import Artlogo from "../assets/ARTGRAM-logo.png"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";
import Search from "./Search";
import { Alert } from "bootstrap";

const API_URL = "http://localhost:5005";

function Header() {
  const [query, setQuery] = useState("");
  const [artist, setArtists] = useState([])
 
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchSearchedArtists = async () => {
      try {
        const response = await axios.get(`{API_URL}/api/users/search?q=${query}`);

        setArtists(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedArtists();
  }, [query]);

  const searchHandler = (string) => {
    setQuery(string);
  };

  return (
    <div >
      <Navbar className="navbar"  expand="xl" style={{backgroundColor: "#f1f1f1" }}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && (
                <>
                  <Navbar.Brand href="/paintings">
                    ARTGRAM
                  </Navbar.Brand>
                  <Nav.Link href="/paintings">Gallery</Nav.Link>
                  <Nav.Link href="/newPainting">New Painting</Nav.Link>
                  <NavDropdown
                    title={
                      <img
                        src={`data:image/png;base64,${user && user.avatar}`}
                        alt="user-avatar"
                        width="30"
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href={`/users/${user.id}`}>
                      {user && user.name}'s Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={logOutUser}>
                      LOGOUT
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Search searchHandler={searchHandler} />
                  
                  
                </>
              )}
              {!isLoggedIn && (
                <>
                  {" "}
                 
                  <Navbar.Brand style={{fontSize:25 }} href="/"> ARTGRAM
                    {/* <img
                      src={Logo}
                      width="45"
                      className="d-inline-block align-top"
                      alt="logo"
                    /> */}
                  </Navbar.Brand> 
                  <Nav.Link href="/signup">SIGN UP</Nav.Link>
                  <Nav.Link variant="dark" href="/login">JOIN ARTGRAM</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="hr"></hr>
    </div>
  );
}

export default Header;
