import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/ARTGRAM.png";
import axios from "axios";
import { Form } from "react-bootstrap";

const API_URL = "http://localhost:5005";

// sign un page to save a new User

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAvatar = (e) => setAvatar(e.target.value);

  const onFormChange = (e) => {
    console.log("file to upload:", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setAvatar(btoa(binaryString));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, avatar };

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
        Sign up to be inspired with incredible paintings <br /> from diverse
        styles and genres around the world.
      </p>

      <Form onSubmit={handleSignupSubmit} onChange={(e) => onFormChange(e)}>
        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />

        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />

        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={handleName}
        />
        <label>
          <h1></h1>
        </label>
        <Form.Control type="file" name="image" id="file" accept=".jpeg, .png, .jpg" onChange={handleAvatar}/>

        <button type="submit">SIGN UP</button>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link className="home-nav" to={"/login"}>
        {" "}
        LOGIN
      </Link>
    </div>
  );
}

export default SignupPage;
