import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import PaintingCard from "../components/PaintingCard";
import { Circles } from "react-loader-spinner";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function ProfilePage(props) {
  const [userPaintings, setUserPaintings] = useState([]);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const { userId, paintingId } = useParams();

  const getAllUserPaintings = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings/user/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setUserPaintings(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUserPaintings();
  }, []);

  return (
    <div className="ProfilePage">
      <Container>
        <p style={{ margin: 10, fontSize: 30 }}>{user && user.name} </p>

        <Row md={4}>
          {userPaintings.map((paint) => (
            <PaintingCard key={paint.id} {...paint} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;
