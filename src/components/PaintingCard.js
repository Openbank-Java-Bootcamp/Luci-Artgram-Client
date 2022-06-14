import { Link } from "react-router-dom";
import { Col, Button, Card } from "react-bootstrap";
import LikeButton from "./LikeButton";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function PaintingCard({ picturePath, title, id }) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <Card className="cards" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Link className="linkCard" href={`/paintings/${id}`}>
            <Card.Img
              variant="top"
              src={`data:image/png;base64,${picturePath}`}
              alt={title}
            />
            <Card.Body>
              <Card.Title>
                {title} - {user && user.name} 
              </Card.Title>
             
            </Card.Body>
          </Card.Link> 
          <LikeButton />
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaintingCard;
