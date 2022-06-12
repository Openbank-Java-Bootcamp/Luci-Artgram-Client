import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const API_URL = "http://localhost:5005";

function PaintingDetailsPage(props) {
  const [painting, setPainting] = useState(null);

  const { paintingId } = useParams();

  const getPainting = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings/${paintingId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const onePainting = response.data;
        setPainting(onePainting);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPainting();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="PaintingDetails">
            {painting && (
              <>
                <img src={`data:image/png;base64,${painting.picturePath}`} />
                <h3>{painting.title}</h3>
                <p>{painting.description}</p>
              </>
            )}
          </div>
          <Link to="/paintings">
            <Button variant="light">Back to Gallery</Button>
          </Link>

          <Link to={`/paintings/edit/${paintingId}`}>
            <Button variant="dark">Edit Painting</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default PaintingDetailsPage;
