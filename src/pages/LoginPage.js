import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Logo from "../assets/ARTGRAM.png";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

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
        navigate("/paintings");
      })
      .catch((error) => {
        console.log(error);
        //const errorDescription = error.response.data.errors[0].defaultMessage;
        //setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <img className="logo" src={Logo} alt="logo" />
      <h5>Welcome back!</h5>

      <form onSubmit={handleLoginSubmit}>
        <label>
          {" "}
          <h1> </h1>
        </label>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />

        <label>
          <h1> </h1>{" "}
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <button variant="dark" type="submit">
          LOGIN
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link className="home-nav" to={"/signup"}>
        {" "}
        Sign Up
      </Link>
    </div>
  );
}

export default LoginPage;
