import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const API_URL = "http://localhost:5005";

//Page where you can edit a Painting (only its own artist can edit or delete)

function EditPaintingPage(props) {
  const [picturePath, setPicturePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const { paintingId } = useParams();

  const navigate = useNavigate();

  const onFormChange = (e) => {
    console.log("file to upload:", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setPicturePath(btoa(binaryString));
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings/${paintingId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const onePainting = response.data;
        setPicturePath(onePainting.picturePath);
        setTitle(onePainting.title);
        setDescription(onePainting.description);
      })
      .catch((error) => console.log(error));
  }, [paintingId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    const requestBody = { title, description, picturePath };

    axios
      .put(`${API_URL}/api/paintings/${paintingId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate("/paintings/" + paintingId);
      });
  };

  const deletePainting = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/paintings/${paintingId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/paintings");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddPainting">
      <h3>Edit Painting</h3>

      <Form onSubmit={handleFormSubmit} onChange={(e) => onFormChange(e)}>
        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Label>
          <h1></h1>
        </Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <Form.Label>
          <h1></h1>
        </Form.Label>
        <Button variant="dark" type="submit">Save</Button>
      </Form>
      <p></p>
      <Button variant="secondary" onClick={deletePainting}>Delete Painting</Button>  
    </div>
  );
}

export default EditPaintingPage;
