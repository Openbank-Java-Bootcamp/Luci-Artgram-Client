import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddPaintingPage(props) {
  const [picturePath, setPicturePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { picturePath, title, description };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/paintings`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setPicturePath("");
        setTitle("");
        setDescription("");

        // props.refreshPaintings();
        navigate("/paintings");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddPainting">
      <h3>Add Painting</h3>

      <form onSubmit={handleSubmit} onChange={(e) => onFormChange(e)}>
        <label>
          <h1></h1>
        </label>
        <label><h1></h1></label>
        <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
        <label>
          <h1></h1>
        </label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          <h1></h1>
        </label>
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Painting</button>
      </form>
    </div>
  );
}

export default AddPaintingPage;
