import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddComment(props) {
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  
    e.preventDefault();

   
    const { paintingId } = props;

    const requestBody = {comment, paintingId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/paintings/${paintingId}/comment`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setComment("");

        props.refreshProject();
        navigate("/paintings");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter your comment" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Add comment
      </Button>
    </Form>
  );
}
export default AddComment;
