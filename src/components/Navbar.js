import { Link } from "react-router-dom";
import Logo from "../assets/ARTGRAM.png";
import Search from "../assets/search.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar-container">
      <nav className="nav-fixed">
        {isLoggedIn && (
          <>
            <Link className="home-nav" to="/paintings">
              <Button variant="light" onClick={logOutUser}>
                GALLERY
              </Button>
            </Link>
            <img src={Logo} width="50" height="50" alt="logo" />
            <DropdownButton
              id="dropdown-basic-button"
              title=
                {user && user.name}
                
              
              variant="none"
            >
              <Dropdown.Item href={`/users/${user.name}`}>
                {user && user.name}'s Profile
              </Dropdown.Item>
              <Dropdown.Item href="/" onClick={logOutUser}>
                LOGOUT
              </Dropdown.Item>
            </DropdownButton>
            <Link to="/newPainting">
              <Button variant="light">NEW PAINTING</Button>
            </Link>
            <Link className="home-nav" to="/paintings">
              <img src={Search} width="25" height="25" alt="logo" />
            </Link>
          </>
        )}

        {!isLoggedIn && (
          <>
            {" "}
            <Link className="home-nav" to="/signup">
              SIGN UP
            </Link>
            <Link to="/">
              <img src={Logo} width="50" height="50" alt="logo" />
            </Link>
            <Link className="home-nav" to="/login">
              LOGIN
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
