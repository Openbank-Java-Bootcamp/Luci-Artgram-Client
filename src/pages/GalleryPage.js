import { useState, useEffect } from "react";
import axios from "axios";
import PaintingCard from "../components/PaintingCard";
import { Container, Row} from "react-bootstrap";

const API_URL = "http://localhost:5005";

function GalleryPage() {
  const [paintings, setPaintings] = useState([]);

  const getAllPaintings = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPaintings(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPaintings();
  }, []);

  return (
    <div className="PaintingListPage">
      <Container>
        <Row md={4}>
          {paintings.map((painting) => (
            <PaintingCard key={painting.id} {...painting} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GalleryPage;
