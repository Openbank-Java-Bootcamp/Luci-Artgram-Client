import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddPainting(props) {
  const [picturePath, setPicturePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const [base64TextString, setbase64TextString] = useState("");

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

        //props.refreshPaintings();
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
        {/* <input
          type="text"
          name="picturePath"
          value={picturePath}
          placeholder="Picture"
          onChange={(e) => setPicturePath(e.target.value)}
        /> */}
        <label>Image</label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPainting;
