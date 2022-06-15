import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";
import LikeButton from "../components/LikeButton";

const API_URL = "http://localhost:5005";

function PaintingDetailsPage(props) {
  const [painting, setPainting] = useState(null);
  const [isUserEditor, setIsUserEditor] = useState(false);

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  

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

  const userEditDisplay = () => {
    if (user && painting) {
      console.log(painting)
      console.log(user)

      if (user.name === painting.user.name) {
        return (
          <Link to={`/paintings/edit/${paintingId}`}>
            <Button variant="dark">Edit Painting</Button>
          </Link>
        );
      } 
    }else{
      return <></>
    }
  };

  return (
    <div className="paint-det">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="PaintingDetails">
              {painting && (
                <div>
                  <img
                    width={350}
                    src={`data:image/png;base64,${painting.picturePath}`}
                  />
                  <h3>{painting.title}</h3>

                  <p>Description: {painting.description}</p>
                  <h6>Artist: {painting.user.name}</h6>
                  <LikeButton />
                  <hr></hr>
                </div>
              )}
            </div>
            {painting &&
              painting.comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  commentId={comment.id}
                  {...comment}
                />
              ))}
            <AddComment refreshPainting={getPainting} paintingId={paintingId} />

            <p></p>
            <Link to="/paintings">
              <Button variant="light">Back to Gallery</Button>
            </Link>
            {userEditDisplay()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaintingDetailsPage;
