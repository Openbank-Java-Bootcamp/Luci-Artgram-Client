import { useContext, useEffect, useState } from "react";
import { Button, Card, CloseButton } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//  comments in a Picture

const API_URL = "http://localhost:5005";

function CommentCard(props, {comment}) {
  console.log(comment)
  const[painting, setPainting] = useState("");
  const { commentId, paintingId } = useParams();

  const navigate = useNavigate();

  const deleteComment = () => {
    const storedToken = localStorage.getItem("authToken");
    console.log(props);
    axios
      .delete(`${API_URL}/api/paintings/comments/${props.commentId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        props.refreshcomments();
        navigate(`/paintings/${paintingId}`);
      })
      .catch((err) => console.log(err));
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    
    <div className="Commentcard">
      <Card>
        {/* <Card.Header>{}</Card.Header> */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {props.comment} 
            </p>
            <CloseButton onClick={() => {deleteComment(); refreshPage();}} paintingId={paintingId} />
          </blockquote>
        </Card.Body>
      </Card>
    </div>


    
  );
}

export default CommentCard;
