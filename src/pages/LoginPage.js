import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Logo from "../assets/ARTGRAM.png";
import { Form } from "react-bootstrap";

const API_URL = "http://localhost:5005";

// Login page where you check if user exists and can access to App

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser, user } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/api/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user) {
      navigate("/paintings");
    }
  }, [user]);

  return (
    <div className="LoginPage">
      <img className="logo" src={Logo} alt="logo" />
      <h5>Welcome back!</h5>

      <Form onSubmit={handleLoginSubmit}>
        <Form.Label>
          {" "}
          <h1> </h1>
        </Form.Label>

        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />

        <Form.Label>
          <h1> </h1>{" "}
        </Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <button variant="dark" type="submit">
          LOGIN
        </button>
      </Form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link className="home-nav" to={"/signup"}>
        {" "}
        SIGN UP
      </Link>
    </div>
  );
}

export default LoginPage;
