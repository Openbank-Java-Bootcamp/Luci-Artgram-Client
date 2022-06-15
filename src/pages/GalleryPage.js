import { useState, useEffect } from "react";
import axios from "axios";
import PaintingCard from "../components/PaintingCard";
import { Container, Row, Spinner} from "react-bootstrap";
import Footer from "../components/Footer";


const API_URL = "http://localhost:5005";

function GalleryPage() {
  const [paintings, setPaintings] = useState([]);

  const getAllPaintings = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setPaintings(response.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPaintings();
  }, []);

  if (!paintings) {
    return (
      <div>
       <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="PaintingListPage">
      <Container style={{marginBottom: 20}}>
        <Row md={4}>
          {paintings.map((painting) => (
            <PaintingCard key={painting.id} {...painting} />
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default GalleryPage;
