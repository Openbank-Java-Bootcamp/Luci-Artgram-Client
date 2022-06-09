import { Link } from "react-router-dom";
import Logo from "../assets/ARTGRAM.png";
import Search from "../assets/search.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button, Form, FormControl, Nav } from "react-bootstrap";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar-container">
      <nav fixed="top" expand="lg" bg="light">
        {isLoggedIn && (
          <>
            <img src={Logo} width="50" height="50" alt="logo" />
            <Link className="home-nav" to="/paintings">
              HOME
            </Link>
            <Link className="home-nav" to="/profile">
              {user && user.name}
            </Link>
            <Link to="/">
              <Button variant="light" onClick={logOutUser}>
                LOGOUT
              </Button>
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
