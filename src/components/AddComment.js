import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const API_URL = "http://localhost:5005";

function AddComment(props) {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    //  <== UPDATE THE FUNCTION
    e.preventDefault();

    // We need the project id when creating the new task
    const { paintingId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { userName, comment, paintingId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/paintings/${paintingId}/comment`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setUserName("");
        setComment("");

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshProject();
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
