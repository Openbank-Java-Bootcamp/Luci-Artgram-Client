import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ARTGRAM.png";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/api/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="SignupPage">
      <img className="logo" src={Logo} alt="logo" />
      <p>
        Sign up to be inspired with incredible paintings <br/> from diverse styles and
        genres around the world.
      </p>

      <form onSubmit={handleSignupSubmit}>
        <label>
          <h1></h1>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />

        <label>
          <h1></h1>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />

        <label>
          <h1></h1>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={handleName}
        />

        <button type="submit">SIGN UP</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link className="home-nav" to={"/login"}>
        {" "}
        Login
      </Link>
    </div>
  );
}

export default SignupPage;
