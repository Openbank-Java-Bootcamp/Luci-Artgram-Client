import { Link } from "react-router-dom";
import { Col, Button } from "react-bootstrap";
import LikeButton from "./LikeButton";

function PaintingCard({ picturePath, title, id }) {
  return (
    
        <Col md={3}>
          <div className="PictureCard card" style={{ width: "30rem" }}>
            <Link className="linkCard" to={`/paintings/${id}`}>
              <img
                variant="top"
                width={"300px"}
                src={`data:image/png;base64,${picturePath}`}
                alt={title}
              />
              <h3>{title}</h3>
            
            </Link> 
              
            <LikeButton/>
          </div>
        </Col>
  
  );
}

export default PaintingCard;
