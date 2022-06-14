import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";


const API_URL = "http://localhost:5005";

function AddComment(props) {
  const [comment, setComment] = useState("");



  const handleSubmit = (e) => {
  
    e.preventDefault();

   
    const { paintingId } = props;

    const requestBody = {comment, paintingId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/paintings/comments`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setComment("");

        props.refreshPainting();
    
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter your comment" value={comment}
          onChange={(e) => setComment(e.target.value)} />
      </Form.Group>
      <Button variant="dark" type="submit">
        Add comment
      </Button>
    </Form>
  );
}
export default AddComment;
