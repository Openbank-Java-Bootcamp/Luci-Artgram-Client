
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";

// Navbar 

const API_URL = "http://localhost:5005";

function Header() {
  const [query, setQuery] = useState("");
  const [artist, setArtists] = useState([])
 
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

// UseEffect for search bar

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
                  <Navbar.Brand style={{fontSize: 30}} href="/paintings">
                    ARTGRAM
                  </Navbar.Brand>
                  <Nav.Link style={{marginLeft: 25, marginTop:10}} href="/paintings">Gallery</Nav.Link>
                  <Nav.Link style={{marginLeft: 25, marginTop:10}} href="/newPainting">New Painting</Nav.Link>
                  <NavDropdown style={{marginLeft: 830}}
                    title={
                      <img
                        src={`data:image/png;base64,${user.avatar}`}
                        alt="user-avatar"
                        width="30"
                        className="avatar-nav"
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
                  {/* <Search searchHandler={searchHandler} /> */}
                  
                  
                </>
              )}
              {!isLoggedIn && (
                <>
                  {" "}
                 
                  <Navbar.Brand style={{fontSize:30 }} href="/"> ARTGRAM
                  </Navbar.Brand> 
                  <Nav.Link  style={{marginLeft: 25, marginTop:8}} href="/signup">SIGN UP</Nav.Link>
                  <Nav.Link  style={{marginLeft: 25, marginTop:8}} variant="dark" href="/login">JOIN ARTGRAM</Nav.Link>
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
