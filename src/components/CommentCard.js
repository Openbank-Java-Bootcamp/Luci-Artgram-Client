import { Card } from "react-bootstrap";


function CommentCard({ userName, comment }) {
  return (
    <div className="Commentcard">
      <Card>
        <Card.Header>{userName}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {comment}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommentCard;
