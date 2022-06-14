import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = "http://localhost:5005";

function CommentCard({ comment }) {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const { commentId, paintingId } = useParams();

  const navigate = useNavigate();

  const deleteComment = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/paintings/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate(`/paintings/${paintingId}`);
      })
      .catch((err) => console.log(err));
      }

  return (
    <div className="Commentcard">
      <Card>
        <Card.Header>{user && user.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {comment}
            </p>
          </blockquote>
          <Button variant="light" onClick={deleteComment}>X</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommentCard;
