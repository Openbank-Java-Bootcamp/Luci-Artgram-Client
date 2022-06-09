import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddPainting(props) {
  const [picturePath, setPicturePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

        props.refreshPaintings();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddPainting">
      <h3>Add Painting</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <h1></h1>
        </label>
        <input
          type="text"
          name="picturePath"
          value={picturePath}
          placeholder="Picture"
          onChange={(e) => setPicturePath(e.target.value)}
        />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPainting;
