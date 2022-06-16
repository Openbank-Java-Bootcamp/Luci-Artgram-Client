
import { Card } from "react-bootstrap";

// Painting Card with the picture, title and Artist name

function PaintingCard({ picturePath, title, id, user }) {
  console.log(user);
  return (
    <div>
      <Card className="cards" style={{ width: "20rem", height: "30rem" }}>
        <Card.Body className="card-body">
          <Card.Link
            className="linkCard"
            style={{ flexDirection: "row", alignItems: "center" }}
            href={`/paintings/${id}`}
          >
            <Card.Img
              variant="top"
              src={`data:image/png;base64,${picturePath}`}
              alt={title}
            />
            <Card.Body>
              <Card.Title>
                {title} - {user.name}
              </Card.Title>
            </Card.Body>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaintingCard;
