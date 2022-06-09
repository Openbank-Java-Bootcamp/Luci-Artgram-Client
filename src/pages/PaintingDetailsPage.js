import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function PaintingDetailsPage(props) {
  const [painting, setPainting] = useState(null);

  const { paintingId } = useParams();

  const getPainting = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings/${paintingId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const onePainting = response.data;
        setPainting(onePainting);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPainting();
  }, []);

  return (
    <div className="PaintingDetails">
      {painting && (
        <>
          <img src={painting.picturePath} />
          <h3>{painting.title}</h3>
          <p>{painting.description}</p>
        </>
      )}

      <Link to="/paintings">
        <Button>Back to Gallery</Button>
      </Link>

      <Link to={`/paintings/edit/${paintingId}`}>
        <Button>Edit Painting</Button>
      </Link>
    </div>
  );
}

export default PaintingDetailsPage;
